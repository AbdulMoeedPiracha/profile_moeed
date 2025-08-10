import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import {
    Box,
    TextField,
    IconButton,
    Typography,
    Paper,
    Stack,
    CircularProgress,
    Fab,
    Slide,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import Cv from '../../../public/Abdul_Moeed_Piracha.pdf';

const OPENAI_API_KEY = "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";

// Setup pdfjs worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const cvDetails = {
    name: "Abdul Moeed Piracha",
    education: "Bachelor in Computer Science from UMT with GPA 3.49",
    experience: "Experienced in Full Stack Development and AI projects",
    skills: "React, Django, Python, Machine Learning",
    softSkills: "Strong communication and teamwork skills",
    linkedin: "https://linkedin.com/in/abdul-moeed-piracha-4a38aa301",
    email: "moeedpir330@gmail.com",
    cvLink: Cv,
};

const generateCVPrompt = (cv) => `
You are a helpful assistant who knows about Abdul Moeed Piracha's professional profile.

Here is his CV summary:
- Name: ${cv.name}
- Education: ${cv.education}
- Experience: ${cv.experience}
- Skills: ${cv.skills}
- Soft Skills: ${cv.softSkills}
- LinkedIn: ${cv.linkedin}
- Email: ${cv.email}
- CV Link: ${cv.cvLink}

Answer questions related to his CV, background, skills, and contact info accurately and helpfully.
`.trim();

export default function ChatBotLauncher() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "system", content: generateCVPrompt(cvDetails) },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Helper to extract text from PDF first page
    const extractTextFromPDF = async (pdfUrl) => {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const textContent = await page.getTextContent();
        const strings = textContent.items.map((item) => item.str);
        return strings.join(" ");
    };

    const personalizedResponses = [
        {
            keywords: ["name", "who are you", "your name"],
            response: "My name is Abdul Moeed Piracha.",
        },
        {
            keywords: ["email", "mail", "contact email"],
            response: `You can reach me at moeedpir330@gmail.com. Here is a <a href="https://mail.google.com/mail/?view=cm&fs=1&to=moeedpir330@gmail.com" target="_blank" rel="noopener noreferrer">Gmail link</a>.`,
            isHtml: true,
        },
        {
            keywords: ["linkedin", "linked in", "profile"],
            response: `Check my LinkedIn profile: <a href="${cvDetails.linkedin}" target="_blank" rel="noopener noreferrer">${cvDetails.linkedin}</a>`,
            isHtml: true,
        },
    ];

    // Custom handler for CV that fetches text content dynamically
    const handleCVResponse = async () => {
        // Show loading message
        setMessages((prev) => [
            ...prev,
            { role: "assistant", content: "Fetching CV details, please wait..." },
        ]);
        try {
            const text = await extractTextFromPDF(cvDetails.cvLink);
            // Show first ~500 chars of extracted text + download link
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: `
            Here is an excerpt from my CV:<br/><br/>
            ${text.slice(0, 500)}...<br/><br/>
            You can download the full CV <a href="${cvDetails.cvLink}" target="_blank" rel="noopener noreferrer">here</a>.
          `,
                    isHtml: true,
                },
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "Sorry, I couldn't read the CV file right now. Please try downloading it instead: " +
                        `<a href="${cvDetails.cvLink}" target="_blank" rel="noopener noreferrer">Download CV</a>`,
                    isHtml: true,
                },
            ]);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessageLower = input.trim().toLowerCase();

        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        // Handle CV request separately to parse pdf dynamically
        if (
            ["cv", "resume", "curriculum vitae"].some((kw) =>
                userMessageLower.includes(kw)
            )
        ) {
            await handleCVResponse();
            setLoading(false);
            return;
        }


        const matchedResponse = personalizedResponses.find(({ keywords }) =>
            keywords.some((kw) => userMessageLower.includes(kw))
        );

        if (matchedResponse) {
            setMessages([
                ...newMessages,
                {
                    role: "assistant",
                    content: matchedResponse.response,
                    isHtml: matchedResponse.isHtml || false,
                },
            ]);
            setLoading(false);
            return;
        }

        // Otherwise, send to OpenAI API
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-4o-mini",
                    messages: newMessages,
                    max_tokens: 500,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${OPENAI_API_KEY}`,
                    },
                }
            );

            const botMessage = response.data.choices[0].message;
            setMessages([...newMessages, botMessage]);
        } catch (error) {
            console.error("OpenAI API error:", error);
            setMessages([
                ...newMessages,
                { role: "assistant", content: "Sorry, something went wrong." },
            ]);
        }
        setLoading(false);
    };

    return (
        <>
            {/* Floating Launcher Button */}
            <Fab
                color="primary"
                aria-label="open chat"
                onClick={() => setIsOpen((o) => !o)}
                sx={{
                    position: "fixed",
                    bottom: 24,
                    right: 24,
                    zIndex: 1300,
                    boxShadow: theme.shadows[4],
                    ...(isSmallScreen && { bottom: 16, right: 16 }),
                }}
            >
                {isOpen ? <CloseIcon /> : <ChatIcon />}
            </Fab>

            {/* Chat Window */}
            <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
                <Paper
                    elevation={16}
                    sx={{
                        position: "fixed",
                        bottom: 90,
                        right: 24,
                        width: { xs: "90vw", sm: 320 },
                        height: { xs: "60vh", sm: 450 },
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: theme.shadows[16],
                        borderRadius: 3,
                        bgcolor: theme.palette.background.paper,
                        zIndex: 1400,
                        fontFamily: theme.typography.fontFamily,
                        userSelect: "none",
                        ...(isSmallScreen && { bottom: 80, right: "5vw" }),
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            p: 2,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                            color: theme.palette.common.white,
                            fontWeight: 700,
                            fontSize: "1.2rem",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                            letterSpacing: 0.8,
                        }}
                    >
                        Chat with me
                    </Box>

                    {/* Messages Container */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            overflowY: "auto",
                            p: 2,
                            backgroundColor:`linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                            scrollbarWidth: "thin",
                            scrollbarColor: `${theme.palette.primary.light} transparent`,
                            "&::-webkit-scrollbar": {
                                width: 6,
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: theme.palette.primary.light,
                                borderRadius: 3,
                            },
                            "&::-webkit-scrollbar-track": {
                                backgroundColor: "transparent",
                            },
                        }}
                    >
                        {messages
                            .filter((msg) => msg.role !== "system")
                            .map((msg, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        mb: 1.5,
                                        display: "flex",
                                        justifyContent:
                                            msg.role === "user" ? "flex-end" : "flex-start",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            maxWidth: "75%",
                                            p: 2,
                                            borderRadius: 3,
                                            backgroundColor:
                                                msg.role === "user"
                                                    ? theme.palette.primary.main
                                                    : theme.palette.primary.light,
                                            color:
                                                msg.role === "user"
                                                    ? theme.palette.common.white
                                                    : theme.palette.primary.dark,
                                            whiteSpace: "pre-wrap",
                                            boxShadow:
                                                msg.role === "user"
                                                    ? `0 3px 10px ${theme.palette.primary.main}80`
                                                    : `0 3px 10px ${theme.palette.primary.light}80`,
                                        }}
                                    >
                                        {msg.isHtml ? (
                                            <Typography
                                                variant="body2"
                                                component="div"
                                                sx={{ wordBreak: "break-word" }}
                                                dangerouslySetInnerHTML={{ __html: msg.content }}
                                            />
                                        ) : (
                                            <Typography variant="body2">{msg.content}</Typography>
                                        )}
                                    </Box>
                                </Box>
                            ))}
                        <div ref={messagesEndRef} />
                    </Box>

                    {/* Input area */}
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                            p: 1.5,
                            borderTop: 1,
                            borderColor: theme.palette.divider,
                            backgroundColor: theme.palette.background.paper,
                        }}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !loading) handleSend();
                            }}
                            disabled={loading}
                            size="small"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 3,
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: theme.palette.primary.light,
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: theme.palette.primary.main,
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: theme.palette.primary.dark,
                                },
                            }}
                        />
                        <IconButton
                            color="primary"
                            onClick={handleSend}
                            disabled={loading}
                            size="large"
                            sx={{
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.common.white,
                                "&:hover": {
                                    bgcolor: theme.palette.primary.dark,
                                    transform: "scale(1.1)",
                                    boxShadow: `0 4px 12px ${theme.palette.primary.dark}80`,
                                },
                                transition: "all 0.25s ease",
                            }}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
                        </IconButton>
                    </Stack>
                </Paper>
            </Slide>
        </>
    );
}

import React from "react";
import { TableRow, TableCell, Box, Typography } from "@mui/material";


export default function TechnologyItem({ item ,...props}) {
    return (
        <TableRow {...props}>
            <TableCell align="center" sx={{ width: 80 }}>
                <Box sx={{ fontSize: 32 }}>{item.icon}</Box>
            </TableCell>
            <TableCell>
                <Typography variant="subtitle1" fontWeight={600}>
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {item.description.slice(0, 100)+ "..."}
                </Typography>
                {item.skillSet && (
                    <Typography variant="caption" color="text.primary" fontWeight={700} sx={{ opacity: 0.7 }}>
                        {item.skillSet}
                    </Typography>
                )}
            </TableCell>
        </TableRow>
    );
}

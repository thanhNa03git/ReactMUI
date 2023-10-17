import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FormatBold, FormatItalic, FormatUnderlined } from "@mui/icons-material";
import { useState } from "react";
export const MuiToggleButton = () => {
    const [formats, setFormats] = useState<string | null>(null);
    console.log({formats,})
    const handleFormatsChange = (_event: React.MouseEvent<HTMLElement>,
        updateFormats: string | null) => {
        setFormats(updateFormats)
        
    }
    return (
        <Stack spacing={2} direction='row'>
            <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatsChange} exclusive>
                <ToggleButton value='bold' aria-label='bold'>
                    <FormatBold />
                </ToggleButton>
                <ToggleButton value='italic' aria-label='italic'>
                    <FormatItalic />
                </ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'>
                    <FormatUnderlined />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    )

}
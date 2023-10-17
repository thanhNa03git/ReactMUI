import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Upload } from "@mui/icons-material";
export const MuiButton = () => {
    return (
        <>
            <h2>Basic button</h2>
            <Stack spacing={2} direction='row'>
                <Button variant="text">Text</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>

            <h2>Text button</h2>
            <Stack spacing={2} direction='row'>
                <Button >Click me</Button>
                <Button disabled>Vô hiệu hóa</Button>
                <Button href="https://github.com/thanhNa03git" variant="contained">Link</Button>
            </Stack>
            <h2>Contained btn thường chứa các hành động chính trong app</h2>
            <Stack spacing={2} direction='row'>
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" href="https://github.com/thanhNa03git">
                    Link
                </Button>
            </Stack>
            <h2> Outlined btn thường nhấn mạng trung bình, chứa hành động quang trọng cũng không phải chính trong app</h2>
            <Stack spacing={2} direction='row'>
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
                <Button variant="outlined" href="#outlined-buttons">
                    Link
                </Button>
            </Stack>
            <h2>Handling clicks Tất cả các thành phần đều chấp nhận trình xử lý onClick được áp dụng cho phần tử DOM gốc.</h2>
            <Stack spacing={2} direction='row'>
                <Button variant="contained"
                    onClick={() => {
                        alert('clicked');
                    }}
                >
                    Click me
                </Button>
            </Stack>
            <h2>Màu btn</h2>
            <Stack spacing={2} direction='row'>
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Stack>
            <h2>Set size cho btn</h2>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    Large
                </Button>
            </Stack>
            <h2>Thêm icon vào btn</h2>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
                <Button variant="outlined" endIcon={<DeleteIcon />}>Delete</Button>
            </Stack>
            <h2>Btn upload file</h2>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" startIcon={<Upload />}>
                    <input type="file" />
                </Button>
            </Stack>
            <h2>Btn group</h2>
            <h3> btn group horizontal</h3>
            <Stack direction='row'>
                <ButtonGroup variant="outlined">
                    <Button >left</Button>
                    <Button >center</Button>
                    <Button >right</Button>

                </ButtonGroup>
            </Stack>
            <h3> btn group vertical</h3>
            <Stack direction='row'>
                <ButtonGroup variant="outlined" color="secondary" orientation="vertical">
                    <Button onClick={() => { alert('left clicked') }}>left</Button>
                    <Button >center</Button>
                    <Button >right</Button>
                </ButtonGroup>
            </Stack>
        </>
    )
}
import { Typography } from "@mui/material"

export const MuiTypography = () => {
    
    return (
        <>
            <div>
                <Typography variant="h1" >h1 Heading text</Typography>
                <Typography variant="h2" >h2 Heading text</Typography>
                <Typography variant="h3" >h3 Heading text</Typography>
                <Typography variant="h4" >h4 Heading text</Typography>
                <Typography variant="h5" >h5 Heading text</Typography>
                {/* gutterBottom: thêm lề dưới
                component: element html là H1 nhưng browser có cùng kiểu H6 */}
                <Typography variant="h6" component='h1'>h6 Heading text</Typography>
            </div>
            <br></br>
            <div>
                <Typography variant="subtitle1" gutterBottom>Subtitle1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur</Typography>

                <Typography variant="subtitle2" gutterBottom>Subtitle2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur</Typography>
            </div>
            <br></br>
            <div>
                <Typography variant="body1" gutterBottom> body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.</Typography>

                <Typography variant="body2" gutterBottom> body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.</Typography>
            </div>
            <br></br>
            <div>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </div>

        </>
    )
}
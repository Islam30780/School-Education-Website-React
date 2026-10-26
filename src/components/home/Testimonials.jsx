import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Star from "@mui/icons-material/Star";
import  DavidK  from "../../assets/icons/DavidK.svg";
import  EmilyL  from "../../assets/icons/EmilyL.svg";
import  JenniferB  from "../../assets/icons/JenniferB.svg";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Stack,
    Typography,
} from "@mui/material";
import { useState } from "react";

const testimonials = [
    {
        name: "Jennifer B",
        image: JenniferB,
        testimonial:
            "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },

    {
        name: "David K",
        image: DavidK,
        testimonial:
            "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
        name: "Emily L",
        image: EmilyL,
        testimonial:
            "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
];

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const visibleTestimonials = testimonials.map(
        (_, index) => testimonials[(activeIndex + index) % testimonials.length],
    );

    const showPreviousTestimonial = () => {
        setActiveIndex(
            (currentIndex) =>
                (currentIndex - 1 + testimonials.length) % testimonials.length,
        );
    };

    const showNextTestimonial = () => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
    };

    return (
        <Stack
            component="section"
            aria-labelledby="testimonials-heading"
            spacing="100px"
            sx={{
                width: "100%",
                maxWidth: "1592px",
                mx: "auto",
            }}
        >
            <Stack
                component="header"
                alignItems="center"
                spacing="19px"
                sx={{
                    px: {
                        xs: 2,
                        sm: 8,
                        md: "300px",
                    },
                }}
            >
                <Box
                    sx={{
                        px: "18px",
                        py: "8px",
                        border: "2px solid",
                        borderColor: "common.black",
                        borderRadius: "8px",
                        bgcolor: "background.paper",
                    }}
                >
                    <Typography
                        component="span"
                        variant="subtitle2"
                        sx={{
                            display: "block",
                            color: "text.primary",
                            textAlign: "center",
                        }}
                    >
                        Their Happy Words 🤗
                    </Typography>
                </Box>
                <Typography
                    id="testimonials-heading"
                    component="h1"
                    variant="h1"
                    sx={{
                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    Our Testimonials
                </Typography>
                <Typography
                    component="h1"
                    variant="body1"
                    sx={{
                        width: "100%",
                        color: "text.primary",
                        textAlign: "center",
                    }}
                >
                    Our testimonials are heartfelt reflections of the nurturing
                    environment we provide, where children flourish both academically and
                    emotionally.
                </Typography>
            </Stack>
            <Stack
                component="nav"
                direction="row"
                alignItems="center"
                spacing={{
                    xs: 1,
                    md: "50px",
                }}
                aria-label="Testimonial carousel"
            >
                <Button
                    aria-label="Show previous testimonials"
                    onClick={showPreviousTestimonial}
                    variant="outlined"
                    sx={{
                        minWidth: "62px",
                        width: "62px",
                        height: "62px",
                        p: "14px",
                        color: "text.primary",
                        border: "2px solid",
                        borderColor: "text.primary",
                        bgcolor: "background.paper",
                        "&:hover": {
                            border: "2px solid",
                            borderColor: "text.primary",
                            bgcolor: "orange.97",
                        },
                    }}
                >
                    <ArrowBack sx={{ fontSize: "30px" }} />
                </Button>
                <Stack
                    direction="row"
                    spacing={{
                        xs: 1,
                        md: "50px",
                    }}
                    sx={{
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    {visibleTestimonials.map((testimonial) => (
                        <Card
                            key={testimonial.name}
                            component="article"
                            sx={{
                                display: "flex",
                                flex: 1,
                                minWidth: 0,
                                bgcolor: "background.paper",
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "30px",
                                    width: "100%",
                                    p: {
                                        xs: 2,
                                        sm: 3,
                                        md: "50px",
                                    },
                                    "&:last-child": {
                                        pb: {
                                            xs: 2,
                                            sm: 3,
                                            md: "50px",
                                        },
                                    },
                                }}
                            >
                                <Stack alignItems="center" spacing="12px" width="100%">
                                    <Avatar
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        sx={{
                                            width: 64,
                                            height: 64,
                                        }}
                                    />
                                    <Typography
                                        component="h2"
                                        variant="h5"
                                        sx={{
                                            width: "100%",
                                            color: "text.primary",
                                            textAlign: "center",
                                        }}
                                    >
                                        {testimonial.name}
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing="5px"
                                    aria-label="5 out of 5 stars"
                                >
                                    {Array.from({ length: 5 }, (_, starIndex) => (
                                        <Star
                                            key={`${testimonial.name}-${starIndex}`}
                                            sx={{
                                                width: "19.31px",
                                                height: "18.56px",
                                                color: "orange.65",
                                            }}
                                        />
                                    ))}
                                </Stack>
                                <Typography
                                    component="p"
                                    variant="body1"
                                    sx={{
                                        width: "100%",
                                        color: "text.primary",
                                        textAlign: "center",
                                    }}
                                >
                                    {testimonial.testimonial}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
                <Button
                    aria-label="Show next testimonials"
                    onClick={showNextTestimonial}
                    variant="outlined"
                    sx={{
                        minWidth: "62px",
                        width: "62px",
                        height: "62px",
                        p: "14px",
                        color: "text.primary",
                        border: "2px solid",
                        borderColor: "text.primary",
                        bgcolor: "background.paper",
                        "&:hover": {
                            border: "2px solid",
                            borderColor: "text.primary",
                            bgcolor: "orange.97",
                        },
                    }}
                >
                    <ArrowForward sx={{ fontSize: "30px" }} />
                </Button>
            </Stack>
        </Stack>
    );
};

export default Testimonials;
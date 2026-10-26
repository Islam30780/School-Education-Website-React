import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const faqColumns = [
  [
    {
      id: "school-hours",
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      id: "uniform-policy",
      question: "Is there a uniform policy for students?",
      answer:
        "Yes, students are expected to follow the academy's uniform policy. More details about the required uniform can be provided by the school administration.",
    },
    {
      id: "extracurricular-activities-first",
      question:
        "What extracurricular activities are available for students?",
      answer:
        "We offer a variety of extracurricular activities designed to support students' creativity, social development, physical activity, and personal interests.",
    },
    {
      id: "extracurricular-activities-second",
      question:
        "What extracurricular activities are available for students?",
      answer:
        "Students can participate in different activities that encourage creativity, teamwork, exploration, and learning outside the classroom.",
    },
  ],
  [
    {
      id: "food-allergies",
      question: "How do you handle food allergies and dietary restrictions?",
      answer:
        "We work closely with parents to understand each child's dietary needs and take appropriate precautions to provide a safe environment.",
    },
    {
      id: "teacher-student-ratio",
      question:
        "What is the teacher-to-student ratio at Little Learners Academy?",
      answer:
        "We maintain a supportive teacher-to-student ratio to ensure that every child receives appropriate attention and guidance throughout the school day.",
    },
    {
      id: "discipline-management",
      question: "How do you handle discipline and behavior management?",
      answer:
        "Our approach focuses on positive guidance, clear expectations, communication, and helping children understand and develop appropriate behavior.",
    },
    {
      id: "admission-application",
      question: "How do I apply for admission to Little Learners Academy?",
      answer:
        "You can contact our admissions team for information about available programs, requirements, and the application process.",
    },
  ],
];

export function FrequentlyAskedQuestions() {
  const [expandedFaq, setExpandedFaq] = useState("school-hours");

  const handleAccordionChange = (faqId) => (_, isExpanded) => {
    setExpandedFaq(isExpanded ? faqId : false);
  };

  return (
    <Box
      component="section"
      aria-labelledby="faq-heading"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 7, md: 12.5 },
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 7, md: 10 },
      }}
    >
      {/* Header */}
      <Stack
        component="header"
        alignItems="center"
        spacing={2.375}
        sx={{
          width: "100%",
          mx: "auto",
          maxWidth: "992px",
        }}
      >
        <Box
          sx={{
            px: 2.5,
            py: 1.25,
            border: "2px solid",
            borderColor: "text.primary",
            borderRadius: 1,
            bgcolor: "background.paper",
          }}
        >
          <Typography
            variant="body2"
            component="span"
            sx={{
              display: "block",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Solutions For The Doubts
          </Typography>
        </Box>

        <Typography
          id="faq-heading"
          variant="h1"
          component="h1"
          align="center"
          sx={{
            fontSize: { xs: "38px", sm: "48px", md: "58px" },
            lineHeight: { xs: 1.3, sm: 1.3, md: 1.3 },
            fontWeight: 700,
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          variant="body1"
          component="p"
          align="center"
          sx={{
            maxWidth: "850px",
            color: "text.secondary",
            lineHeight: 1.7,
          }}
        >
          Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and help you
          make informed decisions for your child&apos;s education.
        </Typography>
      </Stack>

      {/* FAQ Columns */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: { xs: 3.75, md: 6.25 },
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {faqColumns.map((column, columnIndex) => (
          <Stack key={columnIndex} spacing={3.75}>
            {column.map((faq) => {
              const isExpanded = expandedFaq === faq.id;

              return (
                <Accordion
                  key={faq.id}
                  expanded={isExpanded}
                  onChange={handleAccordionChange(faq.id)}
                  disableGutters
                  sx={{
                    overflow: "hidden",
                    border: "2px solid",
                    borderColor: "divider",
                    borderRadius: "12px !important",
                    boxShadow: "none",
                    bgcolor: "background.paper",

                    "&::before": {
                      display: "none",
                    },

                    "& .MuiAccordionSummary-root": {
                      minHeight: 0,
                      px: { xs: 2.5, md: 5 },
                      py: { xs: 2.5, md: 4.25 },
                    },

                    "& .MuiAccordionSummary-root.Mui-expanded": {
                      minHeight: 0,
                      px: { xs: 2.5, md: 5 },
                      py: { xs: 2.5, md: 5 },
                      pb: { xs: 2, md: 3 },
                    },

                    "& .MuiAccordionSummary-content": {
                      my: 0,
                    },

                    "& .MuiAccordionSummary-content.Mui-expanded": {
                      my: 0,
                    },

                    "& .MuiAccordionSummary-expandIconWrapper": {
                      color: "text.primary",
                    },

                    "& .MuiAccordionDetails-root": {
                      px: { xs: 2.5, md: 5 },
                      pb: { xs: 2.5, md: 5 },
                      pt: 0,
                    },
                  }}
                >
                  <AccordionSummary
                    aria-controls={`${faq.id}-content`}
                    id={`${faq.id}-header`}
                    expandIcon={
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0,
                          border: "2px solid",
                          borderColor: "divider",
                          borderRadius: "6px",
                          bgcolor: "primary.main",
                        }}
                      >
                        {isExpanded ? (
                          <RemoveIcon sx={{ fontSize: 24 }} />
                        ) : (
                          <AddIcon sx={{ fontSize: 24 }} />
                        )}
                      </Box>
                    }
                    sx={{
                      gap: { xs: 2, md: 3.75 },

                      "& .MuiAccordionSummary-expandIconWrapper": {
                        transform: "none",
                      },

                      "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                        transform: "none",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      component="h2"
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>

                  {faq.answer && (
                    <AccordionDetails id={`${faq.id}-content`}>
                      <Divider
                        sx={{
                          borderColor: "divider",
                          borderBottomWidth: "2px",
                        }}
                      />

                      <Typography
                        variant="body1"
                        component="p"
                        sx={{
                          mt: 3,
                          color: "text.secondary",
                          lineHeight: 1.7,
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  )}
                </Accordion>
              );
            })}
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
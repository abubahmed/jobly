import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const FAQs = [
    {
      question: "What is Pursuit?",
      answer:
        "Pursuit is a job application tracker software that helps you manage and organize your job applications in one place.",
    },
    {
      question: "How do I create an account on Pursuit?",
      answer:
        "To create an account on Pursuit, click on the 'Sign Up' button on the homepage and fill in the required details. You will receive a confirmation email to verify your account.",
    },
    {
      question: "Can I track multiple job applications at once?",
      answer:
        "Yes, Pursuit allows you to track multiple job applications simultaneously. You can add details for each application and update their status as you progress.",
    },
    {
      question: "Is Pursuit free to use?",
      answer:
        "Pursuit offers both free and premium plans. The free plan includes basic features, while the premium plan provides additional functionalities such as advanced analytics and priority support.",
    },
    {
      question: "How do I update the status of my job applications?",
      answer:
        "To update the status of your job applications, go to your dashboard, select the application you want to update, and choose the new status from the dropdown menu.",
    },
    {
      question: "Can I set reminders for important dates?",
      answer:
        "Yes, Pursuit allows you to set reminders for important dates such as interview schedules and follow-up deadlines. You can receive notifications via email or within the app.",
    },
    {
      question: "How secure is my data on Pursuit?",
      answer:
        "Pursuit takes data security seriously. We use industry-standard encryption and security measures to protect your personal information and ensure your data is safe.",
    },
    {
      question: "Can I export my job application data?",
      answer:
        "Yes, you can export your job application data in various formats such as CSV or PDF. This feature is available in the premium plan.",
    },
    {
      question: "How do I contact Pursuit support?",
      answer:
        "You can contact Pursuit support by clicking on the 'Support' link in the app or by sending an email to support@pursuit.com. Our support team is available 24/7 to assist you.",
    },
    {
      question: "Can I customize the job application fields?",
      answer:
        "Yes, Pursuit allows you to customize the job application fields to suit your needs. You can add, remove, or modify fields to track the information that is most important to you.",
    },
    {
      question: "What type of analytics does Pursuit provide?",
      answer:
        "Pursuit provides detailed analytics on your job application progress, including the number of applications submitted, response rates, and interview success rates. You can use this data to improve your job search strategy.",
    },
    {
      question: "What job characteristics does Pursuit track?",
      answer:
        "Pursuit tracks various job characteristics such as job title, company name, job location, salary range, application deadline, and job description. You can view these details for each application in your dashboard.",
    },
  ];

  const [expanded, setExpanded] = useState<string | boolean>(false);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#05472A",
      }}>
      <Container
        maxWidth="lg"
        sx={{
          py: 10,
        }}>
        <Box
          mb={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
            }}>
            Frequently Asked Questions
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 8,
          }}>
          <Box>
            {FAQs.map((faq, index) => {
              if (index % 2 === 0) {
                return (
                  <AccordianPanel
                    key={index}
                    index={index}
                    faq={faq}
                    top={index == 0 || index == 1 ? false : true}
                    onChange={handleChange(`panel${index}`)}
                    expanded={expanded}
                  />
                );
              }
            })}
          </Box>
          <Box>
            {FAQs.map((faq, index) => {
              if (index % 2 !== 0) {
                return (
                  <AccordianPanel
                    key={index}
                    index={index}
                    faq={faq}
                    top={index == 0 || index == 1 ? false : true}
                    onChange={handleChange(`panel${index}`)}
                    expanded={expanded}
                  />
                );
              }
            })}
          </Box>
        </Box>
        <Box
          mt={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}></Box>
      </Container>
    </Box>
  );
};

const AccordianPanel = ({
  expanded,
  index,
  faq,
  top,
  onChange,
}: {
  expanded: string | boolean;
  faq: { question: string; answer: string };
  top: boolean;
  onChange?: any;
  index: number;
}) => {
  return (
    <Accordion
      disableGutters
      onChange={onChange}
      expanded={expanded === `panel${index}` ? true : false}
      sx={{
        py: "16px",
        "&:before": {
          display: "none",
        },
        px: 0,
        boxShadow: 0,
        borderRadius: 0,
        backgroundColor: "transparent",
        borderTop: top ? "1px solid white" : "none",
        width: "500px",
      }}>
      <AccordionSummary
        sx={{
          px: 0,
        }}
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography
          sx={{
            color: "white",
            fontSize: "1.1rem",
            fontWeight: "regular",
          }}>
          {faq.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          px: 0,
        }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "1.1rem",
            fontWeight: "light",
          }}>
          {faq.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQ;

import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import FAQPanel from "../front-page-components/FAQPanel";
import { FAQs } from "@/util/pageContent";

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | boolean>(false);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
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
              fontSize: "2rem",
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
                  <FAQPanel
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
                  <FAQPanel
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
      </Container>
    </Box>
  );
};

export default FAQ;

import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
  {
    question: "Como posso reciclar corretamente?",
    answer:
      "Para reciclar corretamente, você deve separar os recicláveis pelo tipo de material e limpar antes de descartar.",
  },
  {
    question: "Onde estão localizados os pontos de coleta?",
    answer:
      "Os pontos de coleta estão espalhados por toda a cidade. Visite nosso site para encontrar o ponto mais próximo de você.",
  },
  // Outras perguntas e respostas...
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid
      container
      sx={{
        color: "black",
        bgcolor: "#f7f7f7",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, md: 3 },
        height: { xs: "auto" },
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant="h4" fontWeight="bold">
          FAQ
        </Typography>
      </Grid>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            bgcolor: "white",
            boxShadow:
              expanded === `panel${index}`
                ? "0px 2px 2px rgba(0, 0, 0, 0.1)"
                : "none",
            borderRadius: "10px",
            mb: 2,
            p: 1,
            width: "100%",
            "&:before": {
              display: "none", // Remove a linha antes do Accordion se ela estiver sendo adicionada
            },
            "&:hover": expanded !== `panel${index}` && {
              boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-2px)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
            },
            "&.Mui-expanded": {
              boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-2px)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? <RemoveIcon /> : <AddIcon />
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
};

export default FAQ;

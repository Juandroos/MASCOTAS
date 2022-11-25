import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      id: "panel1",
      heading: "¿CUANTAS MASCOTAS AYUDAN?",
      details: 'Todas las que nos son posible, a diario encontramos casos de animalitos que necesitan de nuestra ayuda, pero no siempre nos es posible brindar esa ayuda por varios factores como ser: falta de espacio en el refugio, alimento limitado, enfermedades que pueden contraer los demas animalitos por no tener los fondos necesarios para ayudar en un momento especifico, y muchos otros mas factores.'
    },
    {
      id: "panel2",
      heading: "¿CUALES SON LOS REQUISITOS PARA ADOPTAR?",
      details: 'AMAR a una mascota y convertirla en parte de tu familia es lo principal, conocer tus datos personales, locación, conocer tus intenciones, como llegaste a la conclusión de adoptar, que tengas claro que es una gran responsabilidad, entre otras cosas.'
    },
    {
      id: "panel3",
      heading: "¿COMO LOGRAN AFRONTAR LOS PROBLEMAS QUE SE PRESENTAN A DIARIO?",
      details: 'Con ayuda de cada uno de ustedes, la ayuda que nos brindan con los alimentos, utensilios, juguetes, medicamentos que donan cada uno de ustedes, nos ayudan a poder servir dia tras dia cada una de las necesidades que se presentan a diario y asi afrontar cada problema.'
    },
    {
      id: "panel4",
      heading: "¿COMO PODEMOS AYUDAR?",
      details: 'La mejor manera en que puedes ayudarnos es adoptando, brindando una segunda oportunidad a nuestros consentidos, que conozcan el significado de la familia, igualmente puedes ayudarnos con alimentos, utensilios, juguetes, medicamentos y todo lo relacionado a nuestros consentidos.'
    },
    {
      id: "panel5",
      heading: "¿COMO SURGE LA IDEA DE CREAR UN REFUGIO?",
      details: 'Dia a dia nos encontramos con problemas a diario, lo mismo es con los animalitos, dia a dia vemos un animalito en la calle, ellos no son culpables de lo que sufren a diario y es por ello la necesidad de darles una segunda oportunidad.'
    }
  ];

  return (

    <div className="container App">

    <br /><br />
    <h2>PREGUNTAS FRECUENTES</h2>
    <br /><br />

    <div className={classes.root}>
      {data.map(accordion => {
        const { id, heading, secondaryHeading, details } = accordion;
        return (
          <Accordion
            expanded={expanded === id}
            key={id}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
  
            >
              <Typography className={classes.heading}>{heading}</Typography>
              <Typography className={classes.secondaryHeading}>
                {secondaryHeading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
    </div>
  );
}

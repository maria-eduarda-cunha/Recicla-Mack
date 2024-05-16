"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../../components/Image";
import Carousel from "./Carousel";

const Estudantes = () => {
  return (
    <Box ml={4} mr={4}>
      <Box
        borderRadius={"10px 10px 0px 0px"} // deixa os cantos arredondados, mas somente o canto superior direito e esquerdo
        height={"150px"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        bgcolor={"#00844D"}
      >
        <Image
          sx={{
            width: { md: "auto" },
            height: { md: 70 },
          }}
          src="Ativos_Recicla_Mack/icone-imagem-duas-peassoas.png"
          alt="Circuitos"
        />
      </Box>
      <Box
        height={"200px"}
        width={"100%"}
        bgcolor={"primary.main"}
        borderRadius={"0px 0px 10px 10px"}
        pt={4}
        pl={2}
        pr={2}
        color={"white"}
      >
        <Typography variant={"body1"} fontWeight={"bold"}>
          Nomes:{" "}
          <Typography variant={"body1"} component={"span"}>
            Fulano de tal
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Curso:{" "}
          <Typography variant={"body1"} component={"span"}>
            Ciências da computação
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Região:{" "}
          <Typography variant={"body1"} component={"span"}>
            Fulano de tal
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

const Objetivo = (props) => {
  const {src,title,desc,alt} = props
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"30%"}
      justifyContent={"center"}
    >
      <Image
        sx={{
          width: { md: "80%", xs: "60%" },
        }}
        src={src}
        alt={alt}
      />
      <Typography variant={"h5"}>{title}</Typography>
      <Typography variant={"body1"} textAlign={"center"} mt={4}>
        {desc}
      </Typography>
    </Box>
  );
};

const Testemunhos = () => {
  return (
    <Box
      bgcolor={"white"}
      width={{ md: "330px", xs: "240px" }}
      height={{ md: "130px", xs: "180px" }}
      borderRadius={2}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <Image
        sx={{
          maxWidth: "30%",
          pl: 2,
        }}
        src="Ativos_Recicla_Mack/imagem-lixo.png"
        alt="Circuitos"
      />
      <Box>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Nomes:{" "}
          <Typography variant={"body1"} component={"span"}>
            Fulano de tal
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Data:{" "}
          <Typography variant={"body1"} component={"span"}>
            dd/MM/YYYY
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"} mt={2}>
          Comentário:{" "}
          <Typography variant={"body1"} component={"span"}>
            Gosto muito do trabalho de vocês
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

const Usuarios = () => {
  return (
    <Box
      bgcolor={"primary.main"}
      width={{ md: "330px", xs: "240px" }}
      height={{md: "130px", xs: "180px"}}
      borderRadius={2}
      ml={2}
      mr={2}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <Image
        sx={{
          maxWidth: "30%",
          pl: 2,
        }}
        src="Ativos_Recicla_Mack/imagem-lixo.png"
        alt="Circuitos"
      />
      <Box>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Nomes:{" "}
          <Typography variant={"body1"} component={"span"}>
            Fulano de tal
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Data:{" "}
          <Typography variant={"body1"} component={"span"}>
            dd/MM/YYYY
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"} mt={2}>
          Comentário:{" "}
          <Typography variant={"body1"} component={"span"}>
            Gosto muito do trabalho de vocês
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Box
        bgcolor={"primary.main"}
        color={"black"}
        width={"100%"}
        height={{ md: 400, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        justifyContent={"center"}
      >
        <Box ml={10} mb={5}>
          <Typography
            variant={"h4"}
            margin={2}
            fontWeight={"bold"}
            textAlign={"left"}
          >
            Apoio Institucional
          </Typography>
        </Box>
        <Box ml={10} mr={10} pb={2}>
          <Image
            sx={{
              width: { md: 80, xs: 100 },
              alignItems: "center",
              m: 0.5,
            }}
            src="Ativos_Recicla_Mack/logo-coopermiti-2.svg"
            alt="Circuitos"
          />
          <Image
            sx={{
              width: { md: 80, xs: 100 },
              alignItems: "center",
              m: 0.5,
            }}
            src="mackenzie.svg"
            alt="Circuitos"
          />
        </Box>
      </Box>

      <Grid
        container
        direction={"column"}
        justify={"center"}
        bgcolor={"white"}
        color={"black"}
        width={"100%"}
        height={"100%"}
        pt={7}
        pb={8}
      >
        <Grid item ml={12} mb={5}>
          <Typography variant={"h4"} fontWeight={"bold"} align={"left"}>
            Objetivos e metas
          </Typography>
        </Grid>
        <Grid
          container
          item
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={4}
          xs={12}
          height={"100%"}
        >
          <Grid
            item
            xs={12}
            md={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Objetivo src="Ativos_Recicla_Mack/imagem-lixo.png" alt="Circuitos" desc="" title="Reduzir o impacto ambiental"/>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Objetivo />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Objetivo />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{ backgroundColor: "#10B14A" }}
        pb={8}
        justifyContent={"center"}
        //spacing={5} // ajustar o espaçamento conforme necessário
      >
        <Grid item xs={12} container>
          <Grid
            item
            xs={12}
            md={12} // desktop
          >
            <Typography
              variant={"h4"}
              ml={10}
              mr={10}
              mt={7}
              mb={5}
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
              textAlign={"left"}
            >
              Estudantes parceiros
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={4} justifyContent={"center"}>
          <Grid item xs={12} sm={6} md={4}>
            <Estudantes />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Estudantes />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Estudantes />
          </Grid>
        </Grid>
      </Grid>

      <Box
        bgcolor={"#00844D"}
        color={"black"}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        justifyContent={"center"}
      >
        <Typography
          variant={"h4"}
          margin={2}
          ml={12}
          mt={7}
          mb={2}
          fontWeight={"bold"}
          textAlign={"left"}
          color={"white"}
        >
          Testemunhos
        </Typography>
        <Typography
          variant={"h5"}
          fontWeight={"bold"}
          textAlign={"left"}
          color={"white"}
          ml={12}
          mb={5}
        >
          Colaboradores
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"100%"}
          justifyContent={"center"}
          pb={8}
          sx={{ overflowX: "hidden" }} // Impede a barra de rolagem horizontal
        >
          <Carousel arrowColor={"black"} width={{ xs: "380px", md: "600px" }}>
            <Testemunhos />
            <Testemunhos />
            <Testemunhos />
            <Testemunhos />
          </Carousel>
        </Box>
      </Box>
      <Box
        bgcolor={"white"}
        color={"black"}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        justifyContent={"center"}
      >
        <Box ml={10} mr={10} mt={7} mb={1}>
          <Typography
            variant={"h4"}
            margin={2}
            fontWeight={"bold"}
            textAlign={"left"}
          >
            Usuários
          </Typography>
        </Box>
        <Box
          ml={10}
          mr={10}
          display={"flex"}
          flexDirection={"row"}
          height={"100%"}
          justifyContent={"center"}
          pb={8}
          sx={{ overflowX: "hidden" }} // Impede a barra de rolagem horizontal
        >
          <Carousel arrowColor={"black"} width={{ xs: "380px", md: "600px" }}>
            <Usuarios />
            <Usuarios />
            <Usuarios />
          </Carousel>
        </Box>
      </Box>
    </div>
  );
};

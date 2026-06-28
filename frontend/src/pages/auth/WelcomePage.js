// import {
//   Stack,
//   Typography,
//   Box,
//   Button,
//   Divider,
//   IconButton,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

// import CatLogo from "../../assets/icons/logo/web-chat.png";

// const WelcomePage = () => {
//   const SocialArray = [
//     {
//       bg: "#2b3137",
//       link: "https://",
//       icon: <GithubLogo color="#fafbfc" weight="duotone" alt="github" />,
//     },
//     {
//       bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
//       link: "https://",
//       icon: <InstagramLogo color="#fff" alt="instagram" />,
//     },
//     {
//       bg: "#0A66C2",
//       link: "https://",
//       icon: <LinkedinLogo color="#fff" alt="linkedin" />,
//     },
//   ];

//   return (
//     <Box widht={"100%"} sx={{ py: 4 }}>
//       <Stack
//         justifyContent={"center"}
//         sx={{
//           flexDirection: {
//             xs: "column-reverse",
//             md: "row",
//           },
//           gap: 2,
//           alignItems: "center",
//           backgroundColor: (theme) => theme.palette.background.paper,
//           borderRadius: { xs: "20px 20px 0px 0px", md: "20px" },
//           minHeight: { xs: 480, md: 430 },
//         }}
//         px={4}
//       >
//         <Box>
//           <Typography
//             component="h1"
//             variant="h1"
//             sx={{ fontSize: { xs: 35, md: 45 }, textAlign: "center" }}
//           >
//             Welcome to web-chat
//           </Typography>
//           <Typography
//             component="h2"
//             variant="subtitle2"
//             color="primary"
//             sx={{ textAlign: "center", mb: { xs: 2, md: 0 } }}
//           >
//             A robust web-based Real-Time Chat App developed by Farhan Parvaiz.
//           </Typography>

//           <Button
//             fullWidth
//             component={Link}
//             to={"/auth/register"}
//             size="large"
//             variant="contained"
//             sx={{
//               mt: 4,
//               display: { xs: "none", md: "flex" },
//               bgcolor: "text.primary",
//               color: (theme) =>
//                 theme.palette.mode === "light" ? "common.white" : "grey.800",
//               "&:hover": {
//                 bgcolor: "text.primary",
//                 color: (theme) =>
//                   theme.palette.mode === "light" ? "common.white" : "grey.800",
//               },
//             }}
//           >
//             Join Now To Start Chatting With Your Friends!
//           </Button>

//           <Stack direction={"row"} justifyContent={"center"} spacing={2} mt={2}>
//             {SocialArray.map((e) => (
//               <Box
//                 sx={{
//                   borderRadius: 20,
//                   width: 40,
//                   height: 40,
//                   background: e.bg,
//                 }}
//               >
//                 <IconButton
//                   component={"a"}
//                   href={e.link}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   {e.icon}
//                 </IconButton>
//               </Box>
//             ))}
//           </Stack>
//         </Box>

//         {/* Image and enclosed Box */}
//         <Box
//           component="img"
//           src={CatLogo}
//           alt={"web-chat Logo"}
//           sx={{ width: { xs: 200, md: 400 }, height: "100%" }}
//         />
//       </Stack>
//       <Stack alignItems={"center"}>
//         <Button
//           component={Link}
//           to={"/auth/login"}
//           size="large"
//           variant="contained"
//           sx={{
//             borderRadius: "0px 0px 20px 20px",
//             width: { xs: "100%", md: "50%" },
//           }}
//         >
//           Lets Get You Logged In!
//         </Button>
//       </Stack>

//       <Box mt={10}>
//         <Stack spacing={2}>
//           <Divider>
//             <Typography
//               component="h2"
//               variant="h2"
//               sx={{ fontSize: { xs: 25, md: 35 } }}
//             >
//               What is web-chat?
//             </Typography>
//           </Divider>
//           <Typography variant="body1">
//             web-chat is a real-time web-based chat application developed by
//             Farhan Parvaiz. Boasting not only a visually appealing UI but also
//             packed with an array of enticing features, web-chat is designed
//             to provide with the best user experience. Powered by the dynamic
//             MERN stack and enriched with the sleek design elements of
//             Material-UI (MUI), this application delivers a seamless chatting
//             experience. From connecting with friends to instant messaging
//             system, web-chat ensures not just connectivity but a symphony of
//             interactivity and speed for its users.
//           </Typography>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export default WelcomePage;







import {
  Stack,
  Typography,
  Box,
  Button,
  Divider,
  IconButton,
  Container,
  Fade,
  useTheme,
  Paper,
  Avatar,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { 
  GithubLogo, 
  InstagramLogo, 
  LinkedinLogo, 
  ChatDots, 
  Users, 
  RocketLaunch,
  Lightning,
  ShieldCheck,
  Smiley
} from "phosphor-react";

import CatLogo from "../../assets/icons/logo/web-chat.png";

const WelcomePage = () => {
  const theme = useTheme();

  const SocialArray = [
    {
      bg: "#2b3137",
      link: "https://github.co",
      icon: <GithubLogo color="#fafbfc" weight="duotone" alt="github" />,
    },
    {
      bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
      link: "https://instagram.com",
      icon: <InstagramLogo color="#fff" alt="instagram" />,
    },
    {
      bg: "#0A66C2",
      link: "https://www.linkedin.com/in/farhan-parvaiz/",
      icon: <LinkedinLogo color="#ffffff" alt="linkedin" />,
    },
  ];

  const features = [
    {
      icon: <Lightning size={32} color={theme.palette.primary.main} />,
      title: "Real-Time Messaging",
      description: "Instant message delivery with WebSocket technology"
    },
    {
      icon: <Users size={32} color={theme.palette.primary.main} />,
      title: "Group Chats",
      description: "Create and manage group conversations effortlessly"
    },
    {
      icon: <ShieldCheck size={32} color={theme.palette.primary.main} />,
      title: "Secure & Private",
      description: "End-to-end encryption for your peace of mind"
    },
    {
      icon: <Smiley size={32} color={theme.palette.primary.main} />,
      title: "Rich Emoji Support",
      description: "Express yourself with thousands of emojis"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 6 } }}>
      <Fade in timeout={800}>
        <Box>
          {/* Hero Section */}
          <Paper
            elevation={0}
            sx={{
              background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
              borderRadius: { xs: "20px 20px 0px 0px", md: "24px" },
              overflow: "hidden",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              alignItems="center"
              justifyContent="space-between"
              sx={{
                p: { xs: 3, sm: 4, md: 6 },
                gap: 4,
                minHeight: { xs: "auto", md: 480 },
              }}
            >
              {/* Left Content */}
              <Box flex={1}>
                <Stack spacing={3}>
                  {/* Badge */}
                  <Chip
                    icon={<ChatDots size={16} />}
                    label="v0.1"
                    size="small"
                    sx={{
                      alignSelf: "flex-start",
                      bgcolor: "primary.main",
                      color: "white",
                      fontWeight: 600,
                      letterSpacing: 0.5,
                      "& .MuiChip-icon": { color: "white" }
                    }}
                  />

                  {/* Main Headline */}
                  <Typography
                    component="h1"
                    variant="h1"
                    sx={{
                      fontSize: { xs: 32, sm: 42, md: 52 },
                      fontWeight: 800,
                      lineHeight: 1.1,
                      background: `linear-gradient(135deg, ${theme.palette.text.primary} 60%, ${theme.palette.primary.main} 100%)`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Welcome to <br />
                    <Box component="span" sx={{ WebkitTextFillColor: theme.palette.text.primary }}>
                      web-chat
                    </Box>
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      color: "text.secondary",
                      maxWidth: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    A robust real-time chat application built with the MERN stack.
                    Connect with friends instantly, securely, and beautifully.
                  </Typography>

                  {/* CTA Buttons */}
                  <Stack 
                    direction={{ xs: "column", sm: "row" }} 
                    spacing={2} 
                    sx={{ mt: 1 }}
                  >
                    <Button
                      component={Link}
                      to="/auth/register"
                      size="large"
                      variant="contained"
                      startIcon={<RocketLaunch />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 700,
                        textTransform: "none",
                        fontSize: "1rem",
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                        boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
                        "&:hover": {
                          boxShadow: `0 12px 32px ${theme.palette.primary.main}60`,
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Get Started Free
                    </Button>
                    
                    <Button
                      component={Link}
                      to="/auth/login"
                      size="large"
                      variant="outlined"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "1rem",
                        borderWidth: 2,
                        "&:hover": {
                          borderWidth: 2,
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Sign In
                    </Button>
                  </Stack>

                  {/* Social Links */}
                  <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
                    {SocialArray.map((e, index) => (
                      <IconButton
                        key={index}
                        component="a"
                        href={e.link}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                          width: 44,
                          height: 44,
                          background: e.bg,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.1) rotate(-5deg)",
                          },
                        }}
                      >
                        {e.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Stack>
              </Box>

              {/* Right Image */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: { xs: 200, sm: 280, md: 350 },
                  height: { xs: 200, sm: 280, md: 350 },
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: -20,
                    borderRadius: "50%",
                    background: `radial-gradient(circle at center, ${theme.palette.primary.main}20, transparent 70%)`,
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src={CatLogo}
                  alt="web-chat Logo"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 1,
                    filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.1))",
                    animation: "float 3s ease-in-out infinite",
                    "@keyframes float": {
                      "0%, 100%": { transform: "translateY(0px)" },
                      "50%": { transform: "translateY(-10px)" },
                    },
                  }}
                />
              </Box>
            </Stack>
          </Paper>

          {/* Stats/Features Section */}
          <Box mt={8}>
            <Stack spacing={4}>
              {/* Section Header */}
              <Divider>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: 24, sm: 32, md: 38 },
                    fontWeight: 700,
                    px: 3,
                    background: `linear-gradient(135deg, ${theme.palette.text.primary} 60%, ${theme.palette.primary.main} 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  What is web-chat?
                </Typography>
              </Divider>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.8,
                  color: "text.secondary",
                  textAlign: "center",
                  maxWidth: 800,
                  mx: "auto",
                }}
              >
                <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
                  web-chat
                </Box>{" "}
                is a real-time web-based chat application developed by Farhan Parvaiz. 
                Boasting a visually appealing UI and packed with enticing features, 
                web-chat is designed to provide the best user experience. Powered by 
                the dynamic MERN stack and enriched with Material-UI (MUI), this 
                application delivers seamless chatting experiences—from connecting 
                with friends to instant messaging, ensuring a symphony of interactivity 
                and speed.
              </Typography>

              {/* Features Grid */}
              <Stack 
                direction={{ xs: "column", sm: "row", md: "row" }}
                spacing={3}
                sx={{ mt: 4, flexWrap: "wrap", justifyContent: "center" }}
              >
                {features.map((feature, index) => (
                  <Fade in timeout={800 + index * 200} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 22%" },
                        p: 3,
                        textAlign: "center",
                        borderRadius: 3,
                        border: `1px solid ${theme.palette.divider}`,
                        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out",
                        background: theme.palette.background.paper,
                        "&:hover": {
                          boxShadow: `0 12px 40px ${theme.palette.primary.main}15`,
                          borderColor: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Paper>
                  </Fade>
                ))}
              </Stack>

              {/* Bottom CTA */}
              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Button
                  component={Link}
                  to="/auth/register"
                  size="large"
                  variant="contained"
                  endIcon={<RocketLaunch />}
                  sx={{
                    px: 6,
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
                    "&:hover": {
                      boxShadow: `0 12px 32px ${theme.palette.primary.main}60`,
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Join Now & Start Chatting!
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Fade>
    </Container>
  );
};

export default WelcomePage;
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent
} from "@mui/material";

import { useNavigate } from "react-router-dom";
  
  
  export default function HomePage() {
    const navigate = useNavigate();
    return (
      <Container maxWidth="lg">
  
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            mb: 6,
            borderRadius: 3,
          
        
            backgroundImage: "url('/images/sports-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        
            position: "relative",
            overflow: "hidden",
        
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.55)"
            },
        
            color: "#ffffff",
textShadow: "3px 3px 10px rgba(0,0,0,0.9)"
          }}
        >
          <Typography    variant="h2"
  sx={{
    color: "#ffffff",
    fontWeight: 900,
    textShadow: "3px 3px 12px rgba(0,0,0,1)"
  }}
>
  Welcome to Sports Center

          </Typography>
  
          <Typography  variant="h5"
  sx={{
    color: "#ffffff",
    fontWeight: 600,
    textShadow: "2px 2px 8px rgba(0,0,0,0.9)"
  }}
>
  Your One-Stop Destination for Premium Sports Equipment
          </Typography>
  
          <Typography sx={{
    mt: 2,
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "1.1rem",
    textShadow: "2px 2px 8px rgba(0,0,0,0.9)"
  }}
>
  🏏 Cricket | ⚽ Football | 🏀 Basketball | 🎾 Tennis | 🏸 Badminton
          </Typography>
  
          <Button
             variant="contained"
             color="secondary"
             sx={{ mt: 4 }}
             onClick={() => navigate('/store')}
          >
            Shop Now
          </Button>
        </Box>
  
        {/* Categories */}
        <Typography variant="h4" align="center" gutterBottom>
          Shop By Category
        </Typography>
  
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 6
          }}
        >
          <Card><CardContent>🏏 Cricket</CardContent></Card>
          <Card><CardContent>⚽ Football</CardContent></Card>
          <Card><CardContent>🏀 Basketball</CardContent></Card>
          <Card><CardContent>🎾 Tennis</CardContent></Card>
          <Card><CardContent>🏸 Badminton</CardContent></Card>
        </Box>
  
        {/* Brands */}
        <Typography variant="h4" align="center" gutterBottom>
          Featured Brands
        </Typography>
  
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 6
          }}
        >
          <Card><CardContent>Nike</CardContent></Card>
          <Card><CardContent>Adidas</CardContent></Card>
          <Card><CardContent>Puma</CardContent></Card>
          <Card><CardContent>Yonex</CardContent></Card>
          <Card><CardContent>Nivia</CardContent></Card>
          <Card><CardContent>Kookaburra</CardContent></Card>
        </Box>
  
        {/* Why Choose Us */}
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose Sports Center?
        </Typography>
  
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography>✅ Genuine Products</Typography>
          <Typography>🚚 Fast Delivery</Typography>
          <Typography>🔒 Secure Shopping</Typography>
          <Typography>💰 Best Prices</Typography>
        </Box>
  
        {/* Statistics */}
        <Typography variant="h4" align="center" gutterBottom>
          Our Achievements
        </Typography>
  
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 6
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h4">55+</Typography>
              <Typography>Products</Typography>
            </CardContent>
          </Card>
  
          <Card>
            <CardContent>
              <Typography variant="h4">10+</Typography>
              <Typography>Brands</Typography>
            </CardContent>
          </Card>
  
          <Card>
            <CardContent>
              <Typography variant="h4">100+</Typography>
              <Typography>Customers</Typography>
            </CardContent>
          </Card>
  
          <Card>
            <CardContent>
              <Typography variant="h4">24/7</Typography>
              <Typography>Support</Typography>
            </CardContent>
          </Card>
        </Box>
  
      </Container>
    );
  }
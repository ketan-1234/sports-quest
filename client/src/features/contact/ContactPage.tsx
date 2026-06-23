import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Divider,
  } from "@mui/material";
  
  export default function ContactPage() {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Header */}
        <Typography
          variant="h2"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Contact Us
        </Typography>
  
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 5 }}
        >
          Your One-Stop Destination for Every Sport 🏅
        </Typography>
  
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                📍 Contact Information
              </Typography>
  
              <Divider sx={{ mb: 2 }} />
  
              <Typography variant="body1">
                <strong>Sports Center</strong>
              </Typography>
  
              <Typography color="text.secondary">
                Bengaluru, Karnataka, India
              </Typography>
  
              <Typography sx={{ mt: 2 }}>
                📧 support@sportscenter.com
              </Typography>
  
              <Typography>
                📞 +91 98765 43210
              </Typography>
            </Paper>
          </Grid>
  
          {/* Support Hours */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                🕒 Support Hours
              </Typography>
  
              <Divider sx={{ mb: 2 }} />
  
              <Typography>
                Monday - Saturday
              </Typography>
  
              <Typography color="text.secondary">
                9:00 AM - 8:00 PM
              </Typography>
  
              <Typography sx={{ mt: 2 }}>
                Sunday
              </Typography>
  
              <Typography color="text.secondary">
                10:00 AM - 5:00 PM
              </Typography>
            </Paper>
          </Grid>
  
          {/* Why Choose Us */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                🏅 Why Choose Us?
              </Typography>
  
              <Divider sx={{ mb: 2 }} />
  
              <Typography>✔ Quality Sports Equipment</Typography>
              <Typography>✔ Fast Delivery</Typography>
              <Typography>✔ Secure Payments</Typography>
              <Typography>✔ Easy Returns</Typography>
              <Typography>✔ Customer Support</Typography>
            </Paper>
          </Grid>
        </Grid>
  
        {/* FAQ Section */}
        <Paper sx={{ p: 4, mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            Frequently Asked Questions
          </Typography>
  
          <Divider sx={{ mb: 3 }} />
  
          <Typography variant="h6">
            How long does delivery take?
          </Typography>
  
          <Typography color="text.secondary" mb={2}>
            Orders are usually delivered within 3-7 business days.
          </Typography>
  
          <Typography variant="h6">
            Can I return products?
          </Typography>
  
          <Typography color="text.secondary" mb={2}>
            Yes, products can be returned within 7 days of delivery.
          </Typography>
  
          <Typography variant="h6">
            How can I track my order?
          </Typography>
  
          <Typography color="text.secondary">
            Track your orders from your account dashboard.
          </Typography>
        </Paper>
  
        {/* Footer Message */}
        <Box textAlign="center" sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            color="primary"
            fontWeight="bold"
          >
            Thank you for choosing Sports Center 🏆
          </Typography>
        </Box>
      </Container>
    );
  }
import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products] = useState([
    { id: 1, name: "Sample Product 1", description: "This is a great product that you will love.", price: "$199.99", image: "/images/sample-product1.jpg" },
    { id: 2, name: "Sample Product 2", description: "This is another great product that you will love.", price: "$299.99", image: "/images/sample-product2.jpg" },
    // Add more products as needed
  ]);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">Products</Button>
          <Button variant="link" color="white">About</Button>
          <Button variant="link" color="white">Contact</Button>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="blue.700" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Products Section */}
      <Box as="section" py={20} px={4} textAlign="center">
        <Heading size="xl" mb={10}>Our Products</Heading>
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          mb={8}
        />
        <Flex wrap="wrap" justifyContent="center" gap={8}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="sm">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading size="md" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* About Section */}
      <Box as="section" bg="gray.100" py={20} px={4} textAlign="center">
        <Heading size="xl" mb={10}>About Us</Heading>
        <Text maxW="2xl" mx="auto">
          ElectroShop is your go-to destination for the latest and greatest in electronics. We pride ourselves on offering top-notch products at competitive prices.
        </Text>
      </Box>

      {/* Contact Section */}
      <Box as="section" py={20} px={4} textAlign="center">
        <Heading size="xl" mb={10}>Contact Us</Heading>
        <Box maxW="md" mx="auto">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                placeholder="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" colorScheme="teal" size="lg">Send Message</Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
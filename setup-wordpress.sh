#!/bin/bash

# Falcon Labs WordPress Setup Script
# This script automates the initial WordPress configuration for blog.falconlabs.tech

echo "🚀 Starting Falcon Labs WordPress Setup..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in WordPress directory
if [ ! -f "wp-config.php" ]; then
    print_error "WordPress not found! Please run this script from your WordPress root directory."
    exit 1
fi

print_status "WordPress installation detected. Proceeding with setup..."

# Install and activate required plugins
print_status "Installing essential plugins..."

wp plugin install wordpress-seo --activate
wp plugin install wp-super-cache --activate
wp plugin install contact-form-7 --activate
wp plugin install google-analytics-for-wordpress --activate

print_status "Plugins installed successfully!"

# Install and activate Astra theme
print_status "Installing Astra theme..."
wp theme install astra --activate

print_status "Astra theme installed and activated!"

# Create essential pages
print_status "Creating essential pages..."

wp post create --post_type=page --post_title="About" --post_content="<h2>About Falcon Labs</h2><p>Professional web development services with 10+ years of experience. Specializing in custom web development, full-stack solutions, and reliable hosting.</p>" --post_status=publish

wp post create --post_type=page --post_title="Contact" --post_content="<h2>Get In Touch</h2><p>Ready to start your web development project? Contact us for a free consultation.</p><p><a href='https://falconlabs.tech/contact'>← Back to Main Site Contact Form</a></p>" --post_status=publish

print_status "Essential pages created!"

# Set up basic site information
print_status "Configuring site settings..."

wp option update blogname "Falcon Labs Blog"
wp option update blogdescription "Web Development Insights & Tutorials"
wp option update admin_email "kevin@falconlabs.tech"
wp option update timezone_string "America/New_York"

print_status "Site settings configured!"

# Create navigation menus
print_status "Setting up navigation menus..."

wp menu create "Primary Menu"
wp menu create "Footer Menu"

# Add pages to primary menu
wp menu item add-post primary-menu 2 --title="Home"
wp menu item add-post primary-menu 3 --title="About"
wp menu item add-post primary-menu 4 --title="Contact"

# Add links to footer menu
wp menu item add-custom footer-menu "https://falconlabs.tech" --title="← Back to Falcon Labs" --position=1

print_status "Navigation menus created!"

# Set up permalinks
print_status "Configuring permalinks..."
wp rewrite structure '/%postname%/'
wp rewrite flush

print_status "Permalinks configured!"

# Create a sample blog post
print_status "Creating sample blog post..."

wp post create --post_title="Welcome to Falcon Labs Blog" --post_content="<h2>Welcome to Our Blog!</h2><p>We're excited to share insights, tutorials, and updates about web development, technology trends, and our latest projects.</p><h3>What to Expect:</h3><ul><li>Web development tutorials</li><li>Industry insights and trends</li><li>Case studies from our projects</li><li>Tips for business owners</li></ul><p>Stay tuned for regular updates!</p>" --post_status=publish --post_category=1

print_status "Sample blog post created!"

print_status "🎉 Basic WordPress setup complete!"
print_warning "Next steps:"
echo "  1. Upload and activate the falcon-labs-child-theme.zip"
echo "  2. Upload your logo (/logo.svg) in Appearance → Customize → Site Identity"
echo "  3. Configure Yoast SEO settings"
echo "  4. Set up Google Analytics"
echo "  5. Create your first real blog post!"
echo ""
print_status "Your blog is now ready at blog.falconlabs.tech"
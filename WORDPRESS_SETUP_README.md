# Falcon Labs WordPress Blog Setup

This repository contains automated tools to set up your WordPress blog at `blog.falconlabs.tech` with Falcon Labs branding.

## 🎨 Automated Branding

### Child Theme (`falcon-labs-child-theme.zip`)
- **Automatic brand colors**: Dark theme with amber/orange accents matching your main site
- **Inter font**: Same typography as falconlabs.tech
- **Hover animations**: Navigation underlines and button effects
- **Responsive design**: Mobile-optimized layouts

### Colors Applied:
- Background: `#0f172a` (slate-800)
- Text: `#e2e8f0` (slate-200)
- Accent: `#fbbf24` (amber-400)
- Header: `#1e293b` (slate-700)

## 🚀 Automated Setup Script

### `setup-wordpress.sh`
**What it does:**
- Installs essential plugins (Yoast SEO, WP Super Cache, Contact Form 7, Google Analytics)
- Activates Astra theme
- Creates essential pages (About, Contact)
- Sets up navigation menus
- Configures site settings
- Creates a sample blog post

### How to Use:

1. **Upload to your WordPress server:**
   ```bash
   scp setup-wordpress.sh user@your-server:/path/to/wordpress/
   ```

2. **Make executable and run:**
   ```bash
   chmod +x setup-wordpress.sh
   ./setup-wordpress.sh
   ```

3. **Upload the child theme:**
   - Go to WordPress Admin → Appearance → Themes → Add New → Upload Theme
   - Upload `falcon-labs-child-theme.zip`
   - Activate the "Falcon Labs Child" theme

4. **Upload your logo:**
   - Go to Appearance → Customize → Site Identity
   - Upload your `/logo.svg` file

## 📋 Manual Setup Checklist

If you prefer manual setup, follow this checklist:

### Phase 1: Theme & Plugins
- [ ] Install Astra theme
- [ ] Upload and activate Falcon Labs Child theme
- [ ] Install Yoast SEO
- [ ] Install WP Super Cache
- [ ] Install Contact Form 7

### Phase 2: Branding
- [ ] Upload logo (/logo.svg)
- [ ] Set site title: "Falcon Labs Blog"
- [ ] Set tagline: "Web Development Insights & Tutorials"
- [ ] Configure colors in Customizer

### Phase 3: Content
- [ ] Create About page
- [ ] Create Contact page (linking to main site)
- [ ] Set up navigation menus
- [ ] Create sample blog post

### Phase 4: SEO & Analytics
- [ ] Configure Yoast SEO
- [ ] Set up Google Analytics
- [ ] Configure XML sitemap
- [ ] Set up social media links

## 🎯 Next Steps After Setup

1. **Write your first 3 blog posts**
2. **Set up Google Search Console**
3. **Configure social sharing**
4. **Add blog link to main website navigation**
5. **Set up email newsletter** (optional)

## 🔧 Customization Options

### Advanced Branding
- Modify `style.css` in the child theme for additional customizations
- Add custom PHP functions in `functions.php`
- Create custom page templates

### Performance Optimization
- Enable WP Super Cache
- Optimize images with Smush plugin
- Set up CDN (Cloudflare, etc.)

### SEO Enhancement
- Configure Yoast SEO settings
- Add structured data
- Set up internal linking

## 📞 Support

If you encounter issues:
1. Check WordPress error logs
2. Verify file permissions (755 for directories, 644 for files)
3. Ensure PHP version compatibility (7.4+ recommended)

---

**🎉 Your blog will be ready in minutes instead of hours!**
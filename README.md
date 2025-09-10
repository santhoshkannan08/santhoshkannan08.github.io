# 🚀 Santhosh Kannan S - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring a unique dark theme with smooth animations and professional design.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live%20Demo-blue)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)
![Theme](https://img.shields.io/badge/Theme-Dark%20Mode-black)

## ✨ Features

### 🎨 **Design & Theme**
- **Dark Theme**: Modern black color scheme with vibrant gradients
- **Responsive Design**: Mobile-first approach with perfect display on all devices
- **Glass Morphism**: Subtle transparency effects and modern UI elements
- **Custom Animations**: Smooth scroll animations, hover effects, and transitions
- **Gradient Text**: Animated gradient text for highlights and titles

### 🚀 **Interactive Elements**
- **Smooth Scrolling**: Seamless navigation between sections
- **Custom Cursor**: Glowing custom cursor for desktop users
- **Hover Effects**: Enhanced hover animations for skills and projects
- **Mobile Navigation**: Animated hamburger menu for mobile devices
- **Form Validation**: Contact form with real-time validation and notifications

### 📱 **Responsive Sections**
- **Hero Section**: Eye-catching introduction with animated profile placeholder
- **About Section**: Personal story with animated statistics counters
- **Skills Section**: Grid-based skill display with proficiency indicators
- **Projects Section**: Project showcase with live links and GitHub repositories
- **Contact Section**: Contact form and social media links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Advanced styling, animations, and responsive design
- **JavaScript**: Interactive functionality and smooth animations
- **Font Awesome**: Professional icons for enhanced UI
- **Google Fonts**: Inter font family for modern typography

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### **Installation**
1. **Clone or Download** the repository
2. **Open** `index.html` in your web browser
3. **Enjoy** your portfolio website!

### **Local Development**
```bash
# Navigate to project directory
cd portfolio

# Open with live server (if you have it installed)
live-server

# Or simply open index.html in your browser
```

## 🎯 Customization Guide

### **Personal Information**
Update the following sections in `index.html`:

#### **Hero Section**
```html
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Your Title</p>
<p class="hero-description">Your description here...</p>
```

#### **About Section**
```html
<p>Your personal story and background...</p>
<div class="about-stats">
    <div class="stat">
        <h3>Your Number</h3>
        <p>Your Stat</p>
    </div>
</div>
```

#### **Skills Section**
```html
<div class="skill-item">
    <i class="fab fa-html5"></i>
    <span>Skill Name (Proficiency%)</span>
</div>
```

#### **Projects Section**
```html
<div class="project-card">
    <h3>Project Name</h3>
    <p>Project description...</p>
    <div class="project-links">
        <a href="live-link" target="_blank">Live Demo</a>
        <a href="github-link" target="_blank">GitHub</a>
    </div>
</div>
```

#### **Contact Information**
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
```

### **Styling Customization**

#### **Color Scheme**
Update colors in `styles.css`:
```css
:root {
    --primary-color: #4ecdc4;
    --secondary-color: #ff6b6b;
    --background-dark: #0a0a0a;
    --text-light: #ffffff;
}
```

#### **Animations**
Modify animation speeds and effects:
```css
.hero-title {
    animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### **Content Updates**

#### **Profile Picture**
Replace the placeholder icon with your actual image:
```html
<div class="profile-placeholder">
    <img src="path/to/your/image.jpg" alt="Your Name">
</div>
```

#### **Social Media Links**
Update your social media profiles:
```html
<a href="your-github-url" class="social-link" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

## 🌐 Browser Support

- ✅ **Chrome** (Latest)
- ✅ **Firefox** (Latest)
- ✅ **Safari** (Latest)
- ✅ **Edge** (Latest)
- ✅ **Mobile Browsers**

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Deployment Options

### **GitHub Pages**
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `username.github.io/repository-name`

### **Netlify**
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain and SSL certificate

### **Vercel**
1. Connect your GitHub repository to Vercel
2. Automatic deployments on every push
3. Fast global CDN and analytics

### **Traditional Hosting**
1. Upload files via FTP/SFTP
2. Ensure all files are in the root directory
3. Test all functionality after upload

## 🔧 Performance Optimization

### **Image Optimization**
- Use WebP format for images
- Compress images before uploading
- Implement lazy loading for project images

### **CSS Optimization**
- Minify CSS for production
- Remove unused CSS rules
- Use CSS custom properties for consistency

### **JavaScript Optimization**
- Minify JavaScript for production
- Remove console.log statements
- Optimize animation performance

## 🐛 Troubleshooting

### **Common Issues**

#### **CSS Not Loading**
- Check file paths in HTML
- Clear browser cache
- Verify CSS file exists

#### **Animations Not Working**
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify CSS animations are supported

#### **Mobile Menu Issues**
- Test on actual mobile devices
- Check touch event handling
- Verify CSS media queries

### **Debug Mode**
Enable debug mode by adding this to your browser console:
```javascript
localStorage.setItem('debug', 'true');
```

## 📈 Future Enhancements

- [ ] **Blog Section**: Add a blog to share your thoughts
- [ ] **Portfolio Gallery**: Image-based project showcase
- [ ] **Dark/Light Toggle**: Theme switching capability
- [ ] **Multi-language Support**: Internationalization
- [ ] **CMS Integration**: Easy content management
- [ ] **Analytics**: Visitor tracking and insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Santhosh Kannan S**
- Frontend Developer
- BCA Student at Agurchand Manmull Jain College
- 3+ months experience in web development
- 5+ projects completed
- 10+ DSA problems solved

## 📞 Contact

- **Email**: codersanthoshkannan@gmail.com
- **Phone**: +91 9345348697
- **Location**: Chengalpattu, Tamil Nadu, India
- **GitHub**: [@santhoshkannan08](https://github.com/santhoshkannan08)
- **LinkedIn**: [Santhosh Kannan](https://www.linkedin.com/in/santhosh-kannan-b471a827b)
- **Instagram**: [@a__silent__phase](https://www.instagram.com/a__silent__phase)

## 🙏 Acknowledgments

- Font Awesome for beautiful icons
- Google Fonts for typography
- CSS Grid and Flexbox for modern layouts
- Intersection Observer API for smooth animations

---

⭐ **Star this repository if you found it helpful!**

**Happy Coding! 🚀**

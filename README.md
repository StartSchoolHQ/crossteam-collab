# StartSchool Tech Module Documentation  

Comprehensive documentation for StartSchool students, featuring group session tasks and goals, solutions to common challenges, practical tips, and insights gathered throughout the learning journey.  

## Features  

- **Documentation**: Covers all seasons of the StartSchool Tech Module, along with the content from group collaboration sessions
- **Problem Solutions**: Step-by-step solutions to common coding challenges and bugs on the Qwasar platform  
- **Best Practices**: Tips and strategies from previous students to support efficient development  

## Documentation Sections  

- **Live Coding**: Themes, examples, and resources for Live Coding sessions  
- **Collaborative Coding**: Session objectives, tasks, and collaboration guidelines  
- **Case Studies**: In-depth analyses of case studies discussed during sessions
- **Qwasar Platform Tips & Tricks**
  - **Onboarding**: Essential setup instructions and getting started resources  
  - **Preseason**: Pre-bootcamp preparation and programming fundamentals  
  - **Season 01**: C programming foundations and introductory projects  
  - **Season 02**: Advanced programming concepts and intermediate projects  
  - **Season 03**: Final projects, specialization tracks, and advanced topics  


## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/start-school/start-school-wiki.git
   cd start-school-wiki
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

### Serving the Production Build

```bash
npm run serve
```

## Development

### Project Structure

```
docs/
├── intro.md                 # Introduction page
├── Onboarding/             # Onboarding documentation
├── Preseason/              # Pre-bootcamp content
│   ├── Web/               # Web development fundamentals
│   └── Data/              # Data science fundamentals
├── Season 01/              # First season content
│   ├── Bootcamp C Arc 01/ # C programming arc
│   ├── my-printf.md       # Printf project guide
│   ├── my-ngram.md        # N-gram project guide
│   └── my-mastermind.md   # Mastermind game guide
├── Season 02/              # Second season content
└── Season 03/              # Third season content
```

### Adding New Content

1. Create a new markdown file in the appropriate directory
2. Add proper frontmatter with `sidebar_position`, `title`, and `description`
3. Update the sidebar configuration in `sidebars.js` if needed
4. Follow the existing content structure and formatting

### Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Performance Features

This wiki uses Docusaurus 3.8 with the following performance optimizations:

- **Persistent Cache**: Faster subsequent builds with Rspack
- **Worker Threads**: Better CPU utilization during static site generation
- **CSS Cascade Layers**: Modern CSS features for better performance
- **Future Flags**: Preparation for Docusaurus v4

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Discord**: Join our community for help and collaboration
- **GitHub Issues**: Report bugs or request new features
- **Documentation**: Check the docs for detailed guides

## Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- Community contributions from StartSchool bootcamp students
- Support from the Tech Hero team

---

**Happy Coding!

*Built with ❤️ by the StartSchool community*

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Social Media Analysis - Reddit',
      institution: 'Illinois Institute of Technology',
      duration: 'Jan 2024 – May 2024',
      description: 'Developed a social network analysis project using Python to analyze Reddit data.',
      details: [
        'Utilized Reddit API to extract data on relationships between the author of the post and author of comments on the post.',
        'Created interactive visualizations in Tableau to explore the data.',
        'Leveraged the PRAW library for efficient data retrieval from Reddit.',
      ],
      image: 'assets/images/reddit-project.webp',
    },
    {
      title: 'Credit Card Default Prediction',
      institution: 'Illinois Institute of Technology',
      duration: 'Aug 2023 – Dec 2023',
      description: 'Developed an ML model to predict credit card defaults using demographic and payment history data.',
      details: [
        'Evaluated models based on accuracy, F-1 score, precision, sensitivity, and specificity.',
        'Implemented a voting classifier model achieving high precision and sensitivity, outperforming individual models.',
        'Identified Random Forest as the best-performing individual model, achieving an accuracy of 81.3%.',
      ],
      image: 'assets/images/credit-card-default.jpg',
    },
    {
      title: 'Fake News Classification',
      institution: 'Illinois Institute of Technology',
      duration: 'Jan 2023 – May 2023',
      description: 'Developed a machine learning model to classify news articles as genuine or fake.',
      details: [
        'Built a reliable tool for identifying and filtering misinformation using ML techniques.',
        'Analyzed performance metrics and identified the Siamese Network model as the most effective.',
        'Achieved an exceptional accuracy of 95.44% in classifying fake news articles.',
      ],
      image: 'assets/images/fake-news-classification.jpg',
    },
    {
      title: 'Big Data Analytics for COVID-19 Dataset',
      institution: 'Illinois Institute of Technology',
      duration: 'Aug 2022 – Dec 2022',
      description: 'Conducted a comparative analysis of ML algorithms on a WHO dataset.',
      details: [
        'Evaluated performance, speed, and accuracy of various machine learning models.',
        'Developed and implemented a pipeline utilizing the TPOT classifier for automated feature selection.',
        'Leveraged TensorFlow and deep learning models, achieving the highest accuracy with a Neural Network.',
      ],
      image: 'assets/images/covid-analytics.webp',
    },
    {
      title: 'Netflix Content Analysis Dashboard',
      institution: 'Independent Project',
      duration: 'Jan 2022 - May 2022',
      description: 'Designed an interactive dashboard in Tableau to analyze Netflix’s content library.',
      details: [
        'Visualized content distribution between movies and TV shows.',
        'Analyzed trends in genre popularity and content additions over time.',
        'Explored rating distributions and user preferences across Netflix’s content.',
      ],
      image: 'assets/images/netflix-dashboard.png',
    },
    {
      title: 'Optimizing Movie Recommendation for Enhanced User Experience',
      institution: 'Independent Project',
      duration: 'Aug 2021 – Dec 2021',
      description: 'Developed an advanced movie recommendation system using collaborative filtering techniques.',
      details: [
        'Implemented user-user and item-item collaborative filtering to optimize movie recommendations.',
        'Utilized data analytics techniques to improve user experience.',
        'Designed and evaluated recommendation models in Python using Scikit-Learn and Pandas.',
      ],
      image: 'assets/images/movie-recommendation.png',
    },
  ];
}

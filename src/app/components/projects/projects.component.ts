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
      duration: 'Jan 2024 - May 2024',
      description: 'Analyzed social network relationships using Reddit data.',
      details: [
        'Extracted relationships using Reddit API and PRAW library.',
        'Visualized data using Tableau for actionable insights.',
        'Analyzed interactions between authors of posts and comments.',
      ],
      image: 'assets/images/reddit-project.webp',
    },
    {
      title: 'Exploring Big Data Analytics using ML',
      duration: 'Sept 2023 - Dec 2023',
      description: 'Comparative analysis of ML algorithms on the WHO dataset.',
      details: [
        'Implemented TensorFlow for ML model comparisons.',
        'Built a pipeline using TPOT classifier for accuracy.',
        'Performed extensive data analysis and visualization.',
      ],
      image: 'assets/images/big-data-analytics.jpg',
    },
    {
      title: 'Credit Card Default Prediction',
      duration: 'Feb 2023 - May 2023',
      description: 'Developed ML models for predicting credit card defaults.',
      details: [
        'Trained and evaluated models using demographic and payment data.',
        'Achieved 81.3% accuracy with Random Forest model.',
        'Implemented a Voting Classifier for optimal predictions.',
      ],
      image: 'assets/images/credit-card-default.jpg',
    },
    {
      title: 'Migration of Reinsurance Data',
      duration: 'June 2020 - Aug 2022',
      description:
        'Spearheaded the migration of over 10 terabytes of reinsurance data to Azure Data Lake.',
      details: [
        'Designed Azure Data Factory pipelines for automated ETL processes.',
        'Ensured seamless integration and operation of Databricks.',
        'Boosted data pipeline performance by 35% using advanced CI/CD techniques.',
      ],
      image: 'assets/images/data-migration.webp',
    },
    {
      title: 'Real-Time Data Streaming and ETL',
      duration: 'July 2018 - June 2020',
      description:
        'Implemented real-time data streaming pipelines using Apache Kafka and Spark.',
      details: [
        'Processed over 5 million records to ensure real-time data transformation.',
        'Developed Power BI dashboards for 20+ KPIs using DAX & Power Query.',
        'Enhanced data pipeline efficiency with SQL Server Integration Services (SSIS).',
      ],
      image: 'assets/images/data-streaming.webp',
    },
    {
      title: 'Sales Forecasting and Analysis Platform',
      duration: 'Aug 2022 - Nov 2022',
      description:
        'Developed a robust sales forecasting platform to analyze and predict future sales trends.',
      details: [
        'Implemented machine learning models using Python and TensorFlow to predict sales with 92% accuracy.',
        'Integrated Power BI dashboards for dynamic reporting of sales metrics and KPIs.',
        'Developed ETL pipelines using Apache Spark for real-time data processing and visualization.',
        'Collaborated with a cross-functional team to gather business requirements and deliver actionable insights.',
      ],
      image: 'assets/images/sales-forecasting.jpg',
    },
  ];
}

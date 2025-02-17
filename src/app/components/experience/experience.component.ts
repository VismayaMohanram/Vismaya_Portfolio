import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Flexday AI',
      logo: 'assets/images/Flexday_AI.jpg',
      duration: 'Sept 2024 - March 2025',
      title: 'Software Developer',
      details: [
        'Designed and developed an AI-powered data pipeline to streamline data migration, transformation, and integration for enterprise customer support systems, ensuring seamless data conversion and compliance with industry standards.',
        'Led end-to-end data migration, mapping legacy system data using SQL and Python, achieving 95%+ accuracy in AI-driven query handling.',
        'Optimized ETL workflows, automating data ingestion and transformation processes, reducing manual intervention by 60% and enhancing system efficiency.',
        'Built automated data validation scripts, improving data integrity, compliance, and reducing errors by 40%.',
        'Integrated AI-driven sentiment analysis, structuring unstructured customer data for intelligent query classification and routing.',
        'Developed real-time data pipelines and interactive dashboards, delivering actionable insights and enhancing operational decision-making.',
        'Collaborated with cross-functional teams, ensuring scalable architecture and seamless integration with business intelligence and analytics platforms.'
      ]
    },
    {
      company: 'Flexday AI',
      logo: 'assets/images/Flexday_AI.jpg',
      duration: 'Sept 2024 - March 2025',
      title: 'Software Developer',
      details: [
        'Developed a Proof of Concept (PoC) to automate employee data migration, transformation, and visualization by integrating BambooHR with Merge.dev, enhancing HR data accessibility and operational efficiency.',
        'Migrated & structured 10,000+ employee records, ensuring 99% data accuracy through automated mapping and transformation.',
        'Designed an interactive organization chart, enhancing workforce visibility and reporting accuracy by 100%.',
        'Implemented data validation & encryption, reducing data inconsistencies by 35% and ensuring full PII compliance.',
        'Optimized API integration, cutting latency by 30% and improving real-time data synchronization.',
        'Aligned data workflows with business needs, boosting HR operational efficiency by 20% through seamless automation.'
      ]
    },
    {
      company: 'Swiss Re',
      logo: 'assets/images/Swiss_Re.png',
      duration: 'June 2020 - Aug 2022',
      title: 'Data Engineer',
      details: [
        'Spearheaded the migration of over 10 terabytes of reinsurance data from on-premises servers to Azure Data Lake, resulting in a 30% reduction in data retrieval times and improved data accessibility for analytics teams.',
        'Designed Azure Data Factory pipelines to automate ETL processes, reducing data processing time by 60%.',
        'Ensured seamless integration and efficient operation of Databricks, optimizing the performance of data pipelines.',
        'Experienced in migrating and structuring data within Teradata and Snowflake, enhancing data accessibility and ensuring accuracy.',
        'Constructed complex SQL queries to extract and consolidate data from multiple sources, streamlining reporting through ETL techniques.',
        'Implemented advanced CI/CD techniques to streamline Python dependency updates, boosting data pipeline performance by 35% and saving the team 30 hours monthly in manual checks.',
        'Collaborated with over 15+ stakeholders from the product and design teams to address and resolve data-related technical challenges.'
      ]
    },
    {
      company: 'Swiss Re',
      logo: 'assets/images/Swiss_Re.png',
      duration: 'July 2018 - June 2020',
      title: 'Data Analyst',
      details: [
        'Refined master data and executed automated clean-up processes, which enhanced data quality improvements for 10+ business processes and internal reporting.',
        'Implemented ETL pipelines using Apache Kafka and Apache Spark, processing over 5 million records to ensure real-time data streaming and transformation.',
        'Applied knowledge of SQL Server Integration Services (SSIS) for data integration and ETL processes, enhancing data pipeline efficiency.',
        'Improved data accuracy and reliability through SQL and Data Modeling for effective metric tracking and reporting.',
        'Developed interactive Power BI dashboards using expertise in DAX & Power Query. These dashboards translated complex business requirements into clear visualizations of over 20+ vital KPIs.',
        'Collaborated with cross-functional teams to gather requirements and generate detailed SQL queries, improving data accessibility by 35%.'
      ]
    }
  ];
}

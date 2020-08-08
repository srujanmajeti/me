import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Insight Data Science <span>May 2020 - present</span></h2>
                        <ul><b>Data Engineering Fellow</b>
                        <li>Built a tool <b>Personal Stock Broker</b> that helps retail investors to visualize the real-time happenings of the stock market deployed in AWS</li>
                        <li>Leveraged Spark to process the data from Yahoo API and ingest into DynamoDB and to compute metrics</li> 
                        <li>Calculated the change percent of the stock price and alerted user if the change percent is above the threshold set for his personal portfolio</li> 
                        <li>Automated data pipeline using Airflow and created interactive visualizations using Python Dash in the frontend</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>All The Way Live Analytics <span>Sep 2019 - Dec 2019</span></h2>
                        <ul><b>Data Analyst Intern</b>
                           <li> Architected models to predict difference of home and away team scores in NBA by performing feature engineering</li>
                           <li>Developed an API to scrape data in JSON format from different webpages and created pre-processing scripts to clean the data</li>
                           <li>Hosted the model in AWS using EC2 and Kinesis by creating a streaming service to ingest the data for stream processing</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master's Degree <span>Sep 2018 - May 2020</span></h2>
                        <p>I have completed my Master's in <b>Data Analytics</b>  from <b>Northeastern University</b> with major subjects as Parallel Data Processing, Data Management and Big data, Machine Learning and Probability and Statistics. My masters helped me understand not just handling the data also helped me to leverage it to solve real-time problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Accenture <span>Sep 2016 - Jul 2018</span></h2>
                        <ul><b>Big Data Engineer</b>
                           <li>Created a Data Lake in Hadoop by unifying data from different source systems (SQL Server, and Oracle DB) to HDFS using Sqoop</li>
                           <li>Performed claim processing for a health insurance client using Spark Batch Processing on more than 2 TB of customers claim data and ingested the results into Hive</li>
                           <li>Developed shell scripts to automate creation of HiveQL statements that are compatible with the source system</li>
                           <li>Improved efficiency by creating Hive external and internal tables using partitioning and bucketing techniques with ORC format</li>
                           <li>Scheduled CRON jobs to implement Change Data Capture technique to capture changing data for multiple systems</li>
                           <li>Automated ETL processes by creating a framework that reduced the manual data load effort by almost 60 percent and built this as an asset for future data loads</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor's Degree <span>Jun 2012 - May 2016</span></h2>
                        <p>I have completed my Bachelors in <b>Computer engineering</b>  from <b>Vellore Institute of Technology</b> with major subjects as Object-oriented programming, Computer organization and architecture, Computer Networks. During my time at school, I have developed interest in solving complex problems using technology which helped me to improve my analytical and problem solving skill.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

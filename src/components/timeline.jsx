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
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>All The Way Live Analytics <span>September 2019- Decemeber 2019</span></h2>
                        <ul><b>Data Analyst Intern</b>
                           <li>Altered <b>MATLAB</b> test session bucketing algorithm, for optimal utilization of host machines</li>
                           <li>Created visualization using <b>D3.js</b> to detect abnormalities in host allocations across different platforms</li>
                           <li>Optimized SQL queries which resulted in performance improvement by 10%</li>
                           <li>Transformed Perl web services into Java REST APIs with better code organization, optimization, and readability</li>


                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Accenture <span>September 2016 - July 2018</span></h2>
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
                        <h2>Education <span>June 2012- May 2016</span></h2>
                        <p>I have completed my Bachelors in Electrical and Computer engineering  from <b>VIT University</b> with major subjects as Object-oriented programming, Computer organization and architecture, Computer Networks. During my time at school, I have developed interest in solving complex problems using technology which helped me to improve my analytical and problem solving skill.</p> 
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

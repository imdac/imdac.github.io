import{_ as n,M as r,p as s,q as h,R as e,t,N as o,a3 as a}from"./framework-dd056dd6.js";const d={},l=e("h1",{id:"movie-mayhem-iii",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#movie-mayhem-iii","aria-hidden":"true"},"#"),t(" Movie Mayhem III")],-1),m=e("h2",{id:"objective",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#objective","aria-hidden":"true"},"#"),t(" Objective")],-1),c=e("p",null,"For this assignment you will be demonstrating your skills and understanding of SQL Queries, JOINS and Aggregate Functions by creating queries retrieves data from the Movie Mayhem database.",-1),u={class:"custom-container danger"},p=e("p",{class:"custom-container-title"},"A GitHub Classroom Assignment",-1),g={href:"https://classroom.github.com/a/XIsEMvIi",target:"_blank",rel:"noopener noreferrer"},v=a('<h2 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h2><p>For this assignment you will be using the Movie Mayhem database which is provided with repository as the Movie Mayhem SQL File, <code>movie_mayhem.sql</code>.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><p>The following requirement must be met in order to complete the assignment successfully:</p><h3 id="_1-clone-the-repository" tabindex="-1"><a class="header-anchor" href="#_1-clone-the-repository" aria-hidden="true">#</a> 1. Clone the Repository</h3><p>Clone this repository from GitHub and use the provided file to complete the assignment.</p><h3 id="_2-import-the-movie-mayhem-database" tabindex="-1"><a class="header-anchor" href="#_2-import-the-movie-mayhem-database" aria-hidden="true">#</a> 2. Import the Movie Mayhem Database</h3><p>To import the database, using phpMyAdmin, complete the following instructions.</p>',8),b={href:"http://phpmyadmin.test",target:"_blank",rel:"noopener noreferrer"},f={href:"http://localhost/phpmyadmin",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"Log into phpMyAdmin using the root username and password",-1),y=e("li",null,'From the phpMyAdmin homepage, click on the "Import" tab found at the top of the page.',-1),w=e("li",null,[t('Under the "File to import" section, click the "Choose File" button. Choose the '),e("code",null,"movie_mayhem.sql"),t(" file found in this repository.")],-1),I=e("li",null,'Click the "Go" button found at the bottom of the page.',-1),x=e("li",null,"Once the importing has completed, click on the seussology database which should appear in the list on the left side of page.",-1),M=e("li",null,'With the movie_mayhem database selected, click on the "SQL" tab at the top of the page. From this page, you can execute custom SQL commands.',-1),k=a('<h3 id="_3-create-sql-queries" tabindex="-1"><a class="header-anchor" href="#_3-create-sql-queries" aria-hidden="true">#</a> 3. Create SQL Queries</h3><p>Create <strong>ONE</strong> query for each of the tasks below. The queries should be saved in the <code>queries.sql</code> file.</p><h4 id="_1-using-an-inner-join-retrieve-the-movie-title-movie-title-year-year-and-genre-title-genre-title-for-all-the-movies-in-the-movies-table" tabindex="-1"><a class="header-anchor" href="#_1-using-an-inner-join-retrieve-the-movie-title-movie-title-year-year-and-genre-title-genre-title-for-all-the-movies-in-the-movies-table" aria-hidden="true">#</a> 1. Using an INNER JOIN, retrieve the movie title (<code>movie_title</code>), year (<code>year</code>), and genre title (<code>genre_title</code>) for all the movies in the <code>movies</code> table.</h4><h4 id="_2-retrieve-the-total-number-of-movies-in-the-movies-table-with-the-heading-number-of-movies" tabindex="-1"><a class="header-anchor" href="#_2-retrieve-the-total-number-of-movies-in-the-movies-table-with-the-heading-number-of-movies" aria-hidden="true">#</a> 2. Retrieve the total number of movies in the <code>movies</code> table with the heading <code>Number of Movies</code>.</h4><h4 id="_3-retrieve-the-oldest-movie-year-in-the-movies-table-in-the-genre-fantasy" tabindex="-1"><a class="header-anchor" href="#_3-retrieve-the-oldest-movie-year-in-the-movies-table-in-the-genre-fantasy" aria-hidden="true">#</a> 3. Retrieve the oldest movie year in the <code>movies</code> table in the genre &#39;Fantasy&#39;.</h4><h4 id="_4-retrieve-the-number-of-movies-for-each-genre-title-the-headings-should-be-genre-and-number-of-movies" tabindex="-1"><a class="header-anchor" href="#_4-retrieve-the-number-of-movies-for-each-genre-title-the-headings-should-be-genre-and-number-of-movies" aria-hidden="true">#</a> 4. Retrieve the number of movies for each genre title. The headings should be <code>Genre</code> and <code>Number of Movies</code>.</h4><h4 id="_5-retrieve-a-list-of-directors-that-have-more-than-1-movie-in-the-movies-table" tabindex="-1"><a class="header-anchor" href="#_5-retrieve-a-list-of-directors-that-have-more-than-1-movie-in-the-movies-table" aria-hidden="true">#</a> 5. Retrieve a list of directors that have more than 1 movie in the <code>movies</code> table.</h4><h2 id="submission" tabindex="-1"><a class="header-anchor" href="#submission" aria-hidden="true">#</a> Submission</h2><ol><li>Create a commit with the message &quot;Completed the Movie Mayhem III Assignment&quot;</li><li>Push to GitHub</li><li>Submit the URL to your GitHub Repository to the <strong>Movie Mayhem III</strong> assignment on BrightSpace</li></ol><h2 id="plagiarism-honor-code" tabindex="-1"><a class="header-anchor" href="#plagiarism-honor-code" aria-hidden="true">#</a> Plagiarism Honor Code</h2><p>By making the submission you also agree to the Algonquin College Student Attestation of Academic Integrity below:</p><p><strong>I hereby declare that the work I submit throughout the duration of this course/program will be my own work.</strong></p><p><strong>I understand that plagiarism, whether done deliberately or accidentally, is defined as presenting someone else’s work, in whole or in part, as one’s own, and includes the verbal or written submission of another work (for example, ideas, wording, code, graphics, music, and inventions) without crediting that source. This includes all electronic sources (for example, the Internet, television, video, film, and recordings), all print and written sources (for example, books, periodicals, lyrics, government publications, promotional materials, and academic assignments), and all verbal sources (for example, conversations and interviews).</strong></p><p><strong>I understand that the facilitation of plagiarism, that is, one student sharing his or her work with other students, is also considered an act of plagiarism.</strong></p><p><strong>I understand that contravening Algonquin College Policy AA 20 - Plagiarism will result in an academic sanction(s) as described in this directive.</strong></p>',15);function q(C,A){const i=r("ExternalLinkIcon");return s(),h("div",null,[l,m,c,e("div",u,[p,e("p",null,[t("This assignment must be accepted on "),e("a",g,[t("GitHub Classroom"),o(i)])])]),v,e("ol",null,[e("li",null,[t("Open phpMyAdmin at "),e("a",b,[t("http://phpmyadmin.test"),o(i)]),t(" (macOS) or "),e("a",f,[t("http://localhost/phpmyadmin"),o(i)]),t(" (Windows)")]),_,y,w,I,x,M]),k])}const S=n(d,[["render",q],["__file","movie-mayhem-iii.html.vue"]]);export{S as default};
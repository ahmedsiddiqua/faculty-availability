# Faculty Availability
Check if a faculty member is available or not 

Students can login to the site using their Unique Serial Number (USN). <br>
As the USN is linked with their class, it will show a list of all the faculty that take classes for them and the status of the respective faculty (available or not). <br>

## Hosting
- You will need to store data in supabase of teachers as well as students. <br>
-> Data in teacher table: ` name_of_teacher, sections_that_they_teach, status ` <br>
-> Data in student table: ` USN, student_section`  <br>

- To selfhost, you will need to have a supabase account and create functions in netlify. You should make tables as keys as per the code. <br>
- Faculties can add their `faculty_unique secret_code_toggle` (different for differen facultites) to their homescreen as shortcut to quickly toggle their status <br>

## Note
This project was done as a part of a course (Design Thinking) where we made this prototype as an assignment. There was a team of 5 members involved in helping build this prototype. 

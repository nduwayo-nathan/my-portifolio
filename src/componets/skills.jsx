import React from "react";
import './skills.css';

function App() {
   return (
      <div className="skills">
         <h5>Technical and Professional</h5>
         <div className="content">
            <div className="profile-skills">
               <div>
                  <input type="checkbox" id="sk1" />
                  <label htmlFor="sk1"></label>
                  <ul className="skills skills1">
                     <li className="sk-cms"><span>CMS</span></li>
                     <li className="sk-dtb"><span>DDBB</span></li>
                     <li className="sk-dis"><span>Design</span></li>
                     <li className="sk-pro"><span>Programing</span></li>
                     <li className="sk-ani"><span>Animation</span></li>
                     <li className="sk-ani"><span>Editing</span></li>

                     <li className="more">
                        <input type="checkbox" id="more-con" />
                        <label htmlFor="more-con"></label>
                        <div><span>PHOTO</span><span>API</span><span>MAPS</span><span>VIDEO</span><span>CHARTS</span><span>RWD</span></div>
                     </li>
                  </ul>
               </div>
               <div>
                  <input type="checkbox" id="sk2" />
                  <label htmlFor="sk2"></label>
                  <ul className="skills skills2">
                     <li className="sk-gim"><span>DEV C++</span></li>
                     <li className="sk-ado"><span>Adobe&nbsp;CC</span></li>
                     <li className="sk-not"><span>Notepad++</span></li>
                     <li className="sk-tri"><span>Figma</span></li>
                     <li className="sk-wor"><span>VISUAL STUDIO</span></li>
                     <li className="sk-wor"><span>BLENDER</span></li>
                     <li className="more">
                        <input type="checkbox" id="more-pro" />
                        <label htmlFor="more-pro"></label>
                        <div><span>JOOMLA</span><span>DRUPAL</span><span>JIRA</span><span>TRELLO</span><span>FILEZILLA</span><span>GIT</span></div>
                     </li>
                  </ul>
               </div>
               <div>
                  <input type="checkbox" id="sk3" />
                  <label htmlFor="sk3"></label>
                  <ul className="skills skills3">
                     <li className="sk-css"><span>CSS & HTML</span></li>
                     <li className="sk-htm"><span>C & C++</span></li>
                     <li className="sk-jav"><span>JS & NODEJS & EXPRESSJS</span></li>
                     <li className="sk-php"><span>PHP</span></li>
                     <li className="sk-sql"><span>Paython , DJANGO</span></li>
                     <li className="sk-sql"><span>WEB 3</span></li>
                     <li className="more">
                        <input type="checkbox" id="more-len" />
                        <label htmlFor="more-len"></label>
                        <div><span>XHTML</span><span>XSL</span><span>XML</span><span>JSON</span><span>PUG</span><span>SASS</span></div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;

// hero section
function toggleOverlay() {
  document.querySelectorAll(".carousel-overlay").forEach((overlay) => {
    overlay.classList.toggle("white");
  });
}
//course
document.addEventListener("DOMContentLoaded", () => {
  // Get course ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("course");

  // Fetch the course data from JSON
  fetch("data/courses.json")
    .then((response) => response.json())
    .then((data) => {
      const course = data.courses.find((course) => course.id === courseId);
      if (course) {
        // Dynamically update the course details
        document.getElementById("course-title").innerText = course.title;
        document.getElementById("course-description").innerText =
          course.description;
        document.getElementById("course-start-date").innerText =
          course.startDate;
        document.getElementById("course-fees").innerText = course.fees;
        // Display course overview
        document.getElementById("course-overview").innerText =
          course.details.courseOverview;

        // Display what you will learn
        const learnList = document.getElementById("what-you-will-learn");
        course.details.whatYouWillLearn.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.innerText = item;
          learnList.appendChild(listItem);
        });

        // Display target audience
        document.getElementById("target-audience").innerText =
          course.details.targetAudience;

        // Display why join
        document.getElementById("why-join").innerText = course.details.whyJoin;

        // Display FAQs
        const faqContainer = document.getElementById("faq-container");
        course.faq.forEach((faq) => {
          const faqElement = document.createElement("div");
          faqElement.classList.add("faq-item");

          const questionElement = document.createElement("h4");
          questionElement.innerText = faq.question;
          faqElement.appendChild(questionElement);

          const answerElement = document.createElement("p");
          answerElement.innerText = faq.answer;
          faqElement.appendChild(answerElement);

          faqContainer.appendChild(faqElement);
        });

        // Modify the enroll button to redirect to join-us.html
        document
          .getElementById("enroll-button")
          .addEventListener("click", () => {
            window.location.href = `join-us.html?course=${encodeURIComponent(
              course.title
            )}`;
          });
      } else {
        document.getElementById("course-title").innerText = "Course not found";
      }
    })
    .catch((error) => console.error("Error fetching course data:", error));
});

// join us
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("course");
  document.getElementById("course").value = courseName || "Unknown Course"; // Add a fallback
});
//Thank-you
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("courseName"); // Get course name from URL
  const email = urlParams.get("email"); // Get email from URL

  // Update courseName and email in HTML
  if (courseName) {
    document.getElementById("courseName").textContent = courseName;
  } else {
    console.error("courseName is not found in URL.");
  }

  if (email) {
    document.getElementById("email").textContent = email;
  } else {
    console.error("email is not found in URL.");
  }
});

//subscripition form
(function() {
	try{

			if( document.readyState == "complete" ){ 
				onloadActions_686149();
			}  else {
			  	window.addEventListener('load', function (){
			  		onloadActions_686149();
			  	}, false);
			}

			function onloadActions_686149(){
				constructDiv_686149();
				showZForm_686149();
			}

			function constructDiv_686149(){
				var iframeDiv = document.createElement("div");
				iframeDiv.setAttribute('id','ofi6wJ0rwy87y3Yya2hFdVhgjPKw22rCiha1JrXPoUo_686149');
				iframeDiv.setAttribute('class','zf_main_id_686149');

				var closeFormDiv = document.createElement("div");
				closeFormDiv.setAttribute('id','deleteform_686149');
				closeFormDiv.setAttribute('class','zf_lb_closeform_686149');
				

				var containerDiv = document.createElement("div");
				containerDiv.setAttribute('id','containerDiv_686149');
				containerDiv.setAttribute('class','zf_lB_Container_686149 fadeIn');
				containerDiv.appendChild(iframeDiv);
				containerDiv.appendChild(closeFormDiv);
				
				var wrapperDiv = document.createElement("div");
				wrapperDiv.setAttribute('class','zf_lB_Wrapper_686149');
				wrapperDiv.appendChild(containerDiv);


				var dimmerDiv = document.createElement("div");
				dimmerDiv.setAttribute('class','zf_lB_Dimmer_686149');
				dimmerDiv.setAttribute('elname','popup_box');

				var mainDiv = document.createElement("div");
				mainDiv.setAttribute('id','formsLightBox_686149');
				mainDiv.style.display = "none";
				mainDiv.appendChild(wrapperDiv);
				mainDiv.appendChild(dimmerDiv);

				document.body.appendChild(mainDiv);

			}

			function showZForm_686149(){
				var iframe = document.getElementById("ofi6wJ0rwy87y3Yya2hFdVhgjPKw22rCiha1JrXPoUo_686149").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					loadZForm_686149();
					
				} 
				document.getElementById("formsLightBox_686149").style.display = "block"; 
				document.body.style.overflow = "hidden";
			}

			function loadZForm_686149() {
				var iframe = document.getElementById("ofi6wJ0rwy87y3Yya2hFdVhgjPKw22rCiha1JrXPoUo_686149").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					var f = document.createElement("iframe");
					f.src = getsrcurlZForm_686149('https://forms.zohopublic.in/codingbhumi1/form/EmailSubscription/formperma/ofi6wJ0rwy87y3Yya2hFdVhgjPKw22rCiha1JrXPoUo');
				    
					f.style.border="none";
					f.style.minWidth="100%";
					f.style.overflow="hidden";
					var d = document.getElementById("ofi6wJ0rwy87y3Yya2hFdVhgjPKw22rCiha1JrXPoUo_686149");
					d.appendChild(f);

					var deleteForm = document.getElementById("deleteform_686149");
					deleteForm.onclick = function deleteZForm_686149() {
						var divCont = document.getElementById("formsLightBox_686149");
						divCont.style.display="none";
						document.body.style.overflow = "";

						var iframe = document.getElementById("ofi6wJ0rwy87y3Yya2hFdVhgjPKw22rCiha1JrXPoUo_686149").getElementsByTagName("iframe")[0];
						iframe.remove();
					}

					

					window.addEventListener('message', function (){
						var evntData = event.data;
						if( evntData && evntData.constructor == String ){
							var zf_ifrm_data = evntData.split("|");
							if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
								var zf_perma = zf_ifrm_data[0];
								var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
								var iframe = document.getElementById("ofi6wJ0rwy87y3Yya2hFdVhgjPKw22rCiha1JrXPoUo_686149").getElementsByTagName("iframe")[0];
								if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
									var prevIframeHeight = iframe.style.height;

									var zf_tout = false;
									if( zf_ifrm_data.length == 3 ) {
									    iframe.scrollIntoView();
									    zf_tout = true;
									}

									if ( prevIframeHeight != zf_ifrm_ht_nw ) {
										if( zf_tout ) {
											setTimeout(function(){
										        iframe.style.minHeight = zf_ifrm_ht_nw;
												var containerDiv = document.getElementById("containerDiv_686149");
												containerDiv.style.height=zf_ifrm_ht_nw;
										    },500);
										} else {
										    iframe.style.minHeight = zf_ifrm_ht_nw;
											var containerDiv = document.getElementById("containerDiv_686149");
											containerDiv.style.height=zf_ifrm_ht_nw;
										}
									}
								}
							}
						}

					}, false);
				}
			}

			

			function getsrcurlZForm_686149(zf_src) {
				try {
					
					if ( typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}

					if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}
				}catch(e){}
				return zf_src;
			}
			
			
	}catch(e){}
})();
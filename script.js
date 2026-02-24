// job list data. Prottekta object e ekta kore job information.

let jobsData = [

    {
        id: 1,
        company: "Mobile First Corp",
        role: "React Native Developer",
        loc: "Remote",
        type: "Full-time",
        salary: "$130k - $175k",
        status: "none",
        desc: "Build cross-platform mobile applications using React Native."
    },

    {
        id: 2,
        company: "TechNova Solutions",
        role: "Frontend Developer",
        loc: "New York, USA",
        type: "Full-time",
        salary: "$90k - $120k",
        status: "none",
        desc: "Develop responsive and user-friendly web interfaces using modern JavaScript frameworks."
    },

    {
        id: 3,
        company: "CloudNet Systems",
        role: "Backend Developer",
        loc: "Berlin, Germany",
        type: "Full-time",
        salary: "$100k - $140k",
        status: "none",
        desc: "Build and maintain scalable server-side applications and RESTful APIs."
    },

    {
        id: 4,
        company: "InnoSoft Labs",
        role: "UI/UX Designer",
        loc: "London, UK",
        type: "Contract",
        salary: "$70k - $95k",
        status: "none",
        desc: "Design intuitive user experiences and create modern interface prototypes."
    },

    {
        id: 5,
        company: "DataBridge Inc",
        role: "Data Analyst",
        loc: "Toronto, Canada",
        type: "Part-time",
        salary: "$60k - $85k",
        status: "none",
        desc: "Analyze business data and generate insights using visualization tools."
    },

    {
        id: 6,
        company: "NextGen IT",
        role: "Full Stack Developer",
        loc: "Remote",
        type: "Full-time",
        salary: "$110k - $150k",
        status: "none",
        desc: "Work on both frontend and backend technologies to deliver complete web solutions."
    },

    {
        id: 7,
        company: "CyberWave Tech",
        role: "DevOps Engineer",
        loc: "Sydney, Australia",
        type: "Full-time",
        salary: "$120k - $160k",
        status: "none",
        desc: "Manage CI/CD pipelines and ensure smooth deployment processes in cloud environments."
    },

    {
        id: 8,
        company: "BrightAI Labs",
        role: "Machine Learning Engineer",
        loc: "San Francisco, USA",
        type: "Full-time",
        salary: "$140k - $190k",
        status: "none",
        desc: "Develop and deploy machine learning models for real-world applications."
    }

];


let currentTab = 'all';



// =======================================
// All job card screen e show
// =======================================

function showJobs() {

    var container = document.getElementById("job-container");

    container.innerHTML = "";

    var filteredJobs = [];



    for (var i = 0; i < jobsData.length; i++) {

        if (currentTab === "all") {

            filteredJobs.push(jobsData[i]);

        } else if (jobsData[i].status === currentTab) {

            filteredJobs.push(jobsData[i]);

        }

    }



    // dashboard er count update

    document.getElementById("total-count").innerText = jobsData.length;

    var interviewCount = 0;

    var rejectedCount = 0;



    for (var j = 0; j < jobsData.length; j++) {

        if (jobsData[j].status === "interview") { interviewCount++; }

        if (jobsData[j].status === "rejected") { rejectedCount++; }

    }



    document.getElementById("interview-count").innerText = interviewCount;

    document.getElementById("rejected-count").innerText = rejectedCount;

    document.getElementById("tab-job-count").innerText = filteredJobs.length + " jobs";



    // jodi kono job na thake

    if (filteredJobs.length === 0) {

        document.getElementById("empty-state").classList.remove("hidden");

    } else {

        document.getElementById("empty-state").classList.add("hidden");



        // ek ek kore card make

        for (var k = 0; k < filteredJobs.length; k++) {

            var job = filteredJobs[k];

            var badgeClass = "bg-gray-100 text-gray-600";



            if (job.status === "interview") {

                badgeClass = "bg-green-100 text-green-600";

            } else if (job.status === "rejected") {

                badgeClass = "bg-red-100 text-red-600";

            }



            var card = document.createElement("div");



            card.className = "bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 relative group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-blue-200";



            card.innerHTML = `

                <button onclick="handleDelete(${job.id})" class="absolute top-4 right-4 text-gray-400 hover:text-red-500">

                  <i class="fa-solid fa-trash-can"></i>

                </button>

                <h3 class="text-xl font-bold text-slate-800 dark:text-white">

                    ${job.company}

                </h3>



                <p class="text-blue-500 font-semibold mb-1">

                    ${job.role}

                </p>



                <div class="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">

                    <span><i class="fa-solid fa-location-dot mr-1"></i>${job.loc}</span>

                    <span>•</span>

                    <span><i class="fa-solid fa-briefcase mr-1"></i>${job.type}</span>

                    <span>•</span>

                    <span><i class="fa-solid fa-money-bill-wave mr-1"></i>${job.salary}</span>

                </div>



                <div class="inline-block px-3 py-1 rounded text-[10px] font-bold mb-4 uppercase ${badgeClass}">

                    ${job.status === "none" ? "NOT APPLIED" : job.status.toUpperCase()}

                </div>



                <p class="text-sm text-gray-600 dark:text-gray-300 mb-6">

                    ${job.desc}

                </p>



                <div class="flex gap-3">

                    <button onclick="changeStatus(${job.id}, 'interview')" class="px-4 py-2 border border-green-500 text-green-500 rounded-lg text-xs font-bold hover:bg-green-500 hover:text-white transition-all duration-300">

                        INTERVIEW

                    </button>



                    <button onclick="changeStatus(${job.id}, 'rejected')" class="px-4 py-2 border border-red-500 text-red-500 rounded-lg text-xs font-bold hover:bg-red-500 hover:text-white transition-all duration-300">

                        REJECTED

                    </button>

                </div>



            `;



            container.appendChild(card);

        }

    }

}



// =======================================
// Status change and Alert
// =======================================

function changeStatus(id, newStatus) {

    var job = null;



    // jobsData theke id match

    for (var i = 0; i < jobsData.length; i++) {

        if (jobsData[i].id === id) { job = jobsData[i]; break; }

    }



    if (job !== null) {

        job.status = newStatus;

        alert("Success! Status updated to " + newStatus.toUpperCase());

        showJobs();

    }

}



// =======================================
// Delete and Alert
// =======================================

function handleDelete(id) {

    var confirmDelete = confirm("Are you sure you want to delete this job?");



    if (confirmDelete) {

        var newJobs = [];

        for (var i = 0; i < jobsData.length; i++) {

            if (jobsData[i].id !== id) { newJobs.push(jobsData[i]); }

        }

        jobsData = newJobs;

        alert("Job card removed successfully!");

        showJobs();

    }

}



// =======================================
// Tab Change
// =======================================

function switchTab(tab) {

    currentTab = tab;



    var tabs = ["all", "interview", "rejected"];



    for (var i = 0; i < tabs.length; i++) {

        var t = tabs[i];

        var btn = document.getElementById("tab-" + t);



        if (t === tab) {

            btn.classList.add("bg-blue-600");

            btn.classList.add("text-white");

            btn.classList.remove("bg-gray-200");

            btn.classList.remove("dark:bg-gray-700");

        } else {

            btn.classList.remove("bg-blue-600");

            btn.classList.remove("text-white");

            btn.classList.add("bg-gray-200");

            btn.classList.add("dark:bg-gray-700");

        }

    }



    showJobs();

}



// =======================================
// Dark Mode Function
// =======================================

function toggleDarkMode() {

    var html = document.documentElement;

    var icon = document.getElementById("theme-icon");



    if (html.classList.contains("dark")) {

        html.classList.remove("dark");

        icon.classList.replace("fa-sun", "fa-moon");

        alert("Light mode activated!");

    } else {

        html.classList.add("dark");

        icon.classList.replace("fa-moon", "fa-sun");

        alert("Dark mode activated!");

    }

}



showJobs();
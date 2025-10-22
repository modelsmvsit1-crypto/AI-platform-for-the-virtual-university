let applications = [
    {
        name: "ChatGPT",
        company: "OpenAI",
        field: "Education",
        free: "نعم",
        website: "https://chat.openai.com",
        description: "مساعد ذكي للدردشة والإجابة على الأسئلة",
        logo: "https://img.icons8.com/color/200/chatgpt.png",
        video: "https://www.youtube.com/embed/jC6yDfP6Yw4"

    
    },
    {
        name: "Grok",
        company: "Midjourney Inc",
        field: "Design",
        free: "نعم",
        website: "https://grok.com/",
        description: "تطبيق لإنشاء الصور باستخدام الذكاء الاصطناعي",
        logo: "https://1000logos.net/wp-content/uploads/2025/02/Grok-Logo-tumb-1.png",
         video: "https://www.youtube.com/embed/jC6yDfP6Yw4"
       
    },
    {
        name: "Grammarly",
        company: "Grammarly Inc",
        field: "Writing",
        free: "نعم",
        website: "https://www.grammarly.com",
        description: "مساعد كتابة يحسن الجمل ويصحح الأخطاء",
        logo: "https://img.icons8.com/color/200/grammarly.png"
        
    },
    {
    
        name: "Copilot",
        company: "Microsoft Store",
        field: "Design",
        free: "لا",
        website: "https://copilot.microsoft.com/",
        description: "منشئ صور من النصوص باستخدام الذكاء الاصطناعي",
        logo: "https://1000logos.net/wp-content/uploads/2023/11/Copilot-Logo-tumb-140x88.png"
    },
    {
        name: "Google Assistant",
        company: "Google",
        field: "Productivity",
        free: "نعم",
        website: "https://assistant.google.com",
        description: "مساعد شخصي ذكي للمساعدة في المهام اليومية",
        logo: "https://img.icons8.com/color/200/google-assistant.png"
    },
   
    {
        name: "Notion AI",
        company: "Notion",
        field: "Productivity",
        free: "لا",
        website: "https://www.notion.so/product/ai",
        description: "مساعد ذكي مدمج في منصة Notion للمساعدة في الكتابة والتنظيم",
        logo: "https://img.icons8.com/nolan/200/notion.png"
    }
];





$(document).ready(function() {
    initializeApplications();
    setupEventHandlers();
});


function initializeApplications() {
    const storedApps = localStorage.getItem('aiApplications');

    if (storedApps) {
        applications = JSON.parse(storedApps);
    }
    displayApplications();
}

   
function displayApplications() {
    const tbody = $('#appsTable tbody');
    tbody.empty();

    applications.forEach((app, index) => {
        const row = `
            <tr>
                <td>${app.name}</td>
                <td>${app.company}</td>
                <td>${app.field}</td>
                <td>${app.free}</td>
                <td>
                    <input type="checkbox" class="details-checkbox" data-index="${index}">
                </td>
            </tr>
            <tr class="details-row" id="details-${index}" style="display: none;">
                <td colspan="5">
                    <div class="app-details">
                        <div class="details-grid">
                            <div class="app-logo">
                                <img src="${app.logo}" alt="${app.name}" onerror="this.src='https://via.placeholder.com/100x100?text=LOGO'">
                            </div>
                            <div>
                                <h3>${app.name}</h3>
                                <p><strong>الشركة:</strong> ${app.company}</p>
                                <p><strong>مجال الاستخدام:</strong> ${app.field}</p>
                                <p><strong>مجاني:</strong> ${app.free}</p>
                                <p><strong>الموقع:</strong> <a href="${app.website}" target="_blank">${app.website}</a></p>
                                <p><strong>الوصف:</strong> ${app.description}</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        `;
        tbody.append(row);
    });

    // إضافة معالج الأحداث لصناديق التفاصيل
    $('.details-checkbox').on('change', function(event) {
        const index = $(this).data('index');
        const detailsRow = $('#details-' + index);
        
        if ($(this).is(':checked')) {
            detailsRow.show();
        } else {
            detailsRow.hide();
        }
    });
}

function setupEventHandlers() {
    
}

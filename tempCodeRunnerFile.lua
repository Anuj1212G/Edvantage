from docx import Document
from docx.shared import Pt, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH

try:
    doc = Document()

    # --- Title Page ---
    # Project Title
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run("IBM PROJECT REPORT\n\nPROJECT TITLE")
    run.bold = True
    run.font.size = Pt(14)

    # Main Title
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run("ModSecure - A Content Moderation Service")
    run.bold = True
    run.font.size = Pt(20)

    # Submitted By
    doc.add_paragraph("\nSUBMITTED BY -").runs[0].bold = True
    
    table = doc.add_table(rows=1, cols=2)
    table.style = 'Table Grid'
    hdr_cells = table.rows[0].cells
    hdr_cells[0].text = 'Name'
    hdr_cells[1].text = 'Student ID'
    
    students = [
        ("DEVANSH NISHCHAL MANDLOI", "500109421"),
        ("SHIVANSH DIXIT", "500108690"),
        ("ANSHIKA AGGARWAL", "500106344"),
        ("BHUWAN VIKRAM SENGAR", "500108508"),
        ("UTTKARSH SHARMA", "500109326")
    ]
    
    for name, id_num in students:
        row_cells = table.add_row().cells
        row_cells[0].text = name
        row_cells[1].text = id_num

    # Supervisor Info
    doc.add_paragraph("\nSUPERVISOR -").runs[0].bold = True
    p = doc.add_paragraph("Mr. Harendra Singh\nSchool of Computer Science")
    p.runs[0].bold = True
    
    p = doc.add_paragraph("UPES\nUNIVERSITY OF THE FUTURE\nUNIVERSITY OF PETROLEUM AND ENERGY STUDIES\nDehradun-248007")
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.runs[0].bold = True

    doc.add_page_break()

    # --- Index ---
    doc.add_heading('INDEX', level=1).alignment = WD_ALIGN_PARAGRAPH.CENTER
    
    index_data = [
        ("Abstract", "3"),
        ("1. Introduction", "4"),
        ("2. Problem Statement", "5"),
        ("3. Literature Review", "5"),
        ("4. Objectives", "6"),
        ("5. Methodology", "6"),
        ("6. Technology Stack", "7"),
        ("7. Conclusion and Future Scope", "7"),
        ("8. SWOT Analysis", "8"),
        ("9. References", "8")
    ]
    
    table = doc.add_table(rows=1, cols=2)
    table.style = 'Table Grid'
    hdr_cells = table.rows[0].cells
    hdr_cells[0].text = 'CONTENT'
    hdr_cells[1].text = 'PAGE NO.'
    
    for content, page in index_data:
        row_cells = table.add_row().cells
        row_cells[0].text = content
        row_cells[1].text = page

    doc.add_page_break()

    # --- Content Sections ---
    
    # Abstract
    doc.add_heading('Abstract', level=1)
    doc.add_paragraph("ModSecure is a cloud-based service designed to moderate user-submitted content automatically. As digital platforms grow, the volume of user-generated content requires efficient filtering systems. This project aims to filter inappropriate or harmful content from user-generated inputs using AI-based moderation tools.")
    doc.add_paragraph("The system utilizes a hybrid cloud approach, integrating both IBM Cloud and AWS to ensure comprehensive analysis. IBM Watson Natural Language Understanding (NLU) is employed to analyze emotion, sentiment, and categories, while AWS Rekognition and Comprehend handle image analysis and toxic text detection respectively. The frontend is developed using React.js to provide a user-friendly interface for content submission. By automating this process, the system ensures safer and faster content approval through real-time processing, minimizing the need for manual review and reducing operational costs.")

    # 1. Introduction
    doc.add_heading('1. Introduction', level=1)
    doc.add_paragraph("Content moderation is a critical requirement for modern digital platforms, including social media, online marketplaces, and educational forums. Ensuring that user interactions remain respectful and safe is essential for maintaining platform integrity and user trust. Traditional moderation methods often rely on human reviewers, which can be slow, inconsistent, and expensive.")
    doc.add_paragraph("This project, ModSecure, addresses these challenges by building a cloud-based service to moderate user-submitted content. The system is designed to automatically analyze content to check if it is appropriate for social media. It employs advanced Artificial Intelligence (AI) to reduce manual moderation and improve efficiency.")
    doc.add_paragraph("The application supports various use cases, such as detecting and removing hate speech on social media, preventing scams in online marketplaces, and filtering abusive comments on news portals. By leveraging a hybrid cloud architecture involving IBM Cloud and AWS, ModSecure provides a robust solution for real-time content screening of text and images.")

    # 2. Problem Statement
    doc.add_heading('2. Problem Statement', level=1)
    doc.add_paragraph("In the current digital landscape, the sheer volume of user-generated content makes manual moderation impractical. Platforms face significant challenges in detecting offensive, harmful, or non-compliant content instantly. Relying solely on human moderators leads to inconsistencies, as human error can result in the uneven application of rules. Furthermore, repetitive review tasks consume vast amounts of time and operational costs.")
    doc.add_paragraph("Existing automated solutions often lack the nuance to understand context or require complex, monolithic infrastructure that does not scale well during high traffic periods. Therefore, there is a need for a modern, scalable solution that can:")
    doc.add_paragraph("• Automatically analyze content to check for appropriateness.\n• Ensure safer and faster content approval through real-time processing.\n• Handle high traffic and sudden content spikes without performance drops.\n• Minimize repetitive review tasks to save time and cost.")
    doc.add_paragraph("This project aims to solve these issues by deploying a serverless, AI-driven architecture using React, AWS Lambda, and IBM Watson.")

    # 3. Literature Review
    doc.add_heading('3. Literature Review', level=1)
    doc.add_paragraph("The rise of user-generated content has necessitated the evolution of automated moderation systems. Early systems relied on keyword filtering, which proved ineffective against nuanced toxicity. Recent advancements in Cloud Computing and AI have transformed this landscape.")
    doc.add_paragraph("Research indicates that AI-based moderation ensures uniform application of rules and reduces human error. By utilizing cloud-based workflow automation, organizations can offload the heavy computational tasks required for image and text analysis to managed services.")
    doc.add_paragraph("The adoption of a hybrid cloud approach allows developers to leverage the best-in-class tools from different providers. For instance, IBM Watson’s NLU capabilities allow for deep analysis of emotion and sentiment, while AWS Rekognition offers specialized deep learning models for detecting explicit content in images. This combination ensures a higher degree of accuracy and reliability than single-provider solutions. Furthermore, serverless computing (AWS Lambda) allows these systems to scale automatically, handling millions of requests with minimal latency.")

    # 4. Objectives
    doc.add_heading('4. Objectives', level=1)
    doc.add_paragraph("The primary objectives of the ModSecure project are:")
    doc.add_paragraph("4.1 To build a cloud-based service to moderate user-submitted content efficiently.")
    doc.add_paragraph("4.2 To use AI to reduce manual moderation and improve operational efficiency.")
    doc.add_paragraph("4.3 To ensure safer and faster content approval through real-time processing.")
    doc.add_paragraph("4.4 To implement a hybrid cloud architecture using IBM Cloud for NLU and AWS for image/text analysis.")
    doc.add_paragraph("4.5 To develop a responsive User Interface using React.js for seamless content submission.")
    doc.add_paragraph("4.6 To ensure the system is scalable and capable of handling high traffic without performance drops.")

    # 5. Methodology
    doc.add_heading('5. Methodology', level=1)
    doc.add_paragraph("The development of ModSecure followed a structured, week-wise approach, ensuring a logical progression from design to implementation.")
    
    doc.add_heading('5.1 Phase 1: Conceptualization and Architecture (Week 1)', level=2)
    doc.add_paragraph("The team conducted initial brainstorming sessions to finalize the project topic: 'Content Moderation System'. The goal was defined to filter inappropriate/harmful content using AI tools. The team discussed architectural design and decided to evaluate combinations of cloud platforms, ultimately choosing a hybrid approach involving AWS and IBM Cloud.")
    
    doc.add_heading('5.2 Phase 2: Research and Technology Selection (Week 2)', level=2)
    doc.add_paragraph("Extensive research was conducted on the documentation and APIs of the chosen services.")
    doc.add_paragraph("• IBM Cloud: Selected for Watson Natural Language Understanding (NLU) to analyze entities and sentiment.")
    doc.add_paragraph("• AWS: Selected for Rekognition (image/video) and Comprehend (text analysis).")
    
    doc.add_heading('5.3 Phase 3: Frontend and Backend Development (Week 3)', level=2)
    doc.add_paragraph("• UI Development: The user interface was designed and built using React.js. Components were created for Text Content Input, Image Upload, and moderation triggers.")
    doc.add_paragraph("• Backend Implementation: The backend was set up on AWS using Lambda functions (contentSubmission, textModerationResponse).")
    doc.add_paragraph("• Database: DynamoDB was integrated to store moderation results, flagging content as 'flagged' or 'approved' based on logic.")

    # 6. Technology Stack
    doc.add_heading('6. Technology Stack', level=1)
    doc.add_paragraph("ModSecure utilizes a modern technology stack combining frontend frameworks with powerful cloud-based AI services.")
    
    doc.add_heading('6.1 Frontend', level=2)
    doc.add_paragraph("• React.js: Used to design and build the User Interface, managing components for input and result display.")
    
    doc.add_heading('6.2 Cloud Services (Hybrid Approach)', level=2)
    doc.add_paragraph("• IBM Cloud (Watson NLU): utilized to analyze emotion, sentiment, categories, and entities within the text.")
    doc.add_paragraph("• AWS Rekognition: Used for detecting explicit content in images and videos.")
    doc.add_paragraph("• AWS Comprehend: Employed for toxic and harmful text detection.")
    doc.add_paragraph("• AWS Lambda: Serverless compute service used to provision functions like contentSubmission and textModerationResponse.")
    doc.add_paragraph("• AWS API Gateway: Created and deployed to manage API endpoints for the application.")
    
    doc.add_heading('6.3 Development Tools', level=2)
    doc.add_paragraph("• VS Code: For React and Node.js development.")
    doc.add_paragraph("• AWS Management Console: For configuring Lambda, Step Functions, and DynamoDB.")

    # 7. Conclusion and Future Scope
    doc.add_heading('7. Conclusion and Future Scope', level=1)
    
    doc.add_heading('Conclusion', level=2)
    doc.add_paragraph("ModSecure successfully demonstrates the power of cloud-based workflow automation. By integrating IBM Watson and AWS AI services, the project delivers a consistent and accurate moderation system that reduces manual effort and operational costs. The system ensures instant detection and action on offensive or non-compliant content, making it a vital tool for maintaining safe environments on educational platforms, news portals, and social media.")
    
    doc.add_heading('Future Scope', level=2)
    doc.add_paragraph("The project has significant potential for expansion:")
    doc.add_paragraph("• Integration with Multiple Platforms: Extending the service to diverse platforms like live chats, streaming apps, and gaming communities.")
    doc.add_paragraph("• Enhanced AI Accuracy: Incorporating generative AI and large language models (LLMs) to better understand sarcasm, slang, and cultural nuances.")
    doc.add_paragraph("• Dataset Expansion: Building a richer, ethically sourced dataset to improve AI training and reduce bias.")
    doc.add_paragraph("• Scalability Testing: Optimizing cloud infrastructure to handle millions of requests with minimal latency.")

    # 8. SWOT Analysis
    doc.add_heading('8. SWOT Analysis', level=1)
    
    doc.add_heading('8.1 Strengths', level=2)
    doc.add_paragraph("• Real-Time Moderation: Capable of instant detection and action on harmful content.")
    doc.add_paragraph("• Scalability: The cloud-based architecture handles high traffic and sudden spikes without performance drops.")
    doc.add_paragraph("• Accuracy: AI-based moderation ensures uniform application of rules, reducing human error.")
    doc.add_paragraph("• Cost Efficiency: Minimizes repetitive manual review tasks, saving operational costs.")
    
    doc.add_heading('8.2 Weaknesses', level=2)
    doc.add_paragraph("• Learning Curve: Team members had no prior experience with React, requiring time for learning and trial & error.")
    doc.add_paragraph("• Complexity: Managing a hybrid cloud approach (IBM and AWS) requires intricate integration logic.")
    
    doc.add_heading('8.3 Opportunities', level=2)
    doc.add_paragraph("• Market Expansion: High demand for moderation in online marketplaces and video streaming platforms.")
    doc.add_paragraph("• Technological Growth: Opportunity to integrate Generative AI for deeper context understanding.")
    
    doc.add_heading('8.4 Threats', level=2)
    doc.add_paragraph("• Data Privacy: Handling user-generated content requires strict adherence to privacy laws and ethical sourcing of datasets.")
    doc.add_paragraph("• Evolving Language: Slang and cultural nuances change rapidly, potentially outpacing AI training.")

    # 9. References
    doc.add_heading('9. References', level=1)
    doc.add_paragraph("[1] IBM Cloud. (2025). Watson Natural Language Understanding Documentation. IBM.")
    doc.add_paragraph("[2] Amazon Web Services. (2025). Amazon Rekognition Developer Guide. AWS.")
    doc.add_paragraph("[3] ModSecure Team. (2025). Group 27 Project Presentation: Cloud Based Workflow Automation. UPES.")
    doc.add_paragraph("[4] React Community. (2025). React Documentation. Meta.")

    file_path = "ModSecure_Report.docx"
    doc.save(file_path)
    print(file_path)

except ImportError:
    # Fallback to creating a Markdown file if python-docx is not installed
    md_content = """# IBM PROJECT REPORT

### PROJECT TITLE
## ModSecure - A Content Moderation Service

### SUBMITTED BY -

| Name | Student ID |
| :--- | :--- |
| DEVANSH NISHCHAL MANDLOI | 500109421 |
| SHIVANSH DIXIT | 500108690 |
| ANSHIKA AGGARWAL | 500106344 |
| BHUWAN VIKRAM SENGAR | 500108508 |
| UTTKARSH SHARMA | 500109326 |

### SUPERVISOR -
**Mr. Harendra Singh**
School of Computer Science
**UPES**
**UNIVERSITY OF THE FUTURE**
**UNIVERSITY OF PETROLEUM AND ENERGY STUDIES**
Dehradun-248007

---

### INDEX

| CONTENT | PAGE NO. |
| :--- | :--- |
| Abstract | 3 |
| 1. Introduction | 4 |
| 2. Problem Statement | 5 |
| 3. Literature Review | 5 |
| 4. Objectives | 6 |
| 5. Methodology | 6 |
| 6. Technology Stack | 7 |
| 7. Conclusion and Future Scope | 7 |
| 8. SWOT Analysis | 8 |
| 9. References | 8 |

---

### Abstract

ModSecure is a cloud-based service designed to moderate user-submitted content automatically. As digital platforms grow, the volume of user-generated content requires efficient filtering systems. This project aims to filter inappropriate or harmful content from user-generated inputs using AI-based moderation tools.

The system utilizes a hybrid cloud approach, integrating both IBM Cloud and AWS to ensure comprehensive analysis. IBM Watson Natural Language Understanding (NLU) is employed to analyze emotion, sentiment, and categories, while AWS Rekognition and Comprehend handle image analysis and toxic text detection respectively. The frontend is developed using React.js to provide a user-friendly interface for content submission. By automating this process, the system ensures safer and faster content approval through real-time processing, minimizing the need for manual review and reducing operational costs.

### 1. Introduction

Content moderation is a critical requirement for modern digital platforms, including social media, online marketplaces, and educational forums. Ensuring that user interactions remain respectful and safe is essential for maintaining platform integrity and user trust. Traditional moderation methods often rely on human reviewers, which can be slow, inconsistent, and expensive.

This project, ModSecure, addresses these challenges by building a cloud-based service to moderate user-submitted content. The system is designed to automatically analyze content to check if it is appropriate for social media. It employs advanced Artificial Intelligence (AI) to reduce manual moderation and improve efficiency.

The application supports various use cases, such as detecting and removing hate speech on social media, preventing scams in online marketplaces, and filtering abusive comments on news portals. By leveraging a hybrid cloud architecture involving IBM Cloud and AWS, ModSecure provides a robust solution for real-time content screening of text and images.

### 2. Problem Statement

In the current digital landscape, the sheer volume of user-generated content makes manual moderation impractical. Platforms face significant challenges in detecting offensive, harmful, or non-compliant content instantly. Relying solely on human moderators leads to inconsistencies, as human error can result in the uneven application of rules. Furthermore, repetitive review tasks consume vast amounts of time and operational costs.

Existing automated solutions often lack the nuance to understand context or require complex, monolithic infrastructure that does not scale well during high traffic periods. Therefore, there is a need for a modern, scalable solution that can:
* Automatically analyze content to check for appropriateness.
* Ensure safer and faster content approval through real-time processing.
* Handle high traffic and sudden content spikes without performance drops.
* Minimize repetitive review tasks to save time and cost.

This project aims to solve these issues by deploying a serverless, AI-driven architecture using React, AWS Lambda, and IBM Watson.

### 3. Literature Review

The rise of user-generated content has necessitated the evolution of automated moderation systems. Early systems relied on keyword filtering, which proved ineffective against nuanced toxicity. Recent advancements in Cloud Computing and AI have transformed this landscape.

Research indicates that AI-based moderation ensures uniform application of rules and reduces human error. By utilizing cloud-based workflow automation, organizations can offload the heavy computational tasks required for image and text analysis to managed services.

The adoption of a hybrid cloud approach allows developers to leverage the best-in-class tools from different providers. For instance, IBM Watson’s NLU capabilities allow for deep analysis of emotion and sentiment, while AWS Rekognition offers specialized deep learning models for detecting explicit content in images. This combination ensures a higher degree of accuracy and reliability than single-provider solutions. Furthermore, serverless computing (AWS Lambda) allows these systems to scale automatically, handling millions of requests with minimal latency.

### 4. Objectives

The primary objectives of the ModSecure project are:

4.1 To build a cloud-based service to moderate user-submitted content efficiently.
4.2 To use AI to reduce manual moderation and improve operational efficiency.
4.3 To ensure safer and faster content approval through real-time processing.
4.4 To implement a hybrid cloud architecture using IBM Cloud for NLU and AWS for image/text analysis.
4.5 To develop a responsive User Interface using React.js for seamless content submission.
4.6 To ensure the system is scalable and capable of handling high traffic without performance drops.

### 5. Methodology

The development of ModSecure followed a structured, week-wise approach, ensuring a logical progression from design to implementation.

**5.1 Phase 1: Conceptualization and Architecture (Week 1)**
The team conducted initial brainstorming sessions to finalize the project topic: "Content Moderation System". The goal was defined to filter inappropriate/harmful content using AI tools. The team discussed architectural design and decided to evaluate combinations of cloud platforms, ultimately choosing a hybrid approach involving AWS and IBM Cloud.

**5.2 Phase 2: Research and Technology Selection (Week 2)**
Extensive research was conducted on the documentation and APIs of the chosen services.
* **IBM Cloud:** Selected for Watson Natural Language Understanding (NLU) to analyze entities and sentiment.
* **AWS:** Selected for Rekognition (image/video) and Comprehend (text analysis).

**5.3 Phase 3: Frontend and Backend Development (Week 3)**
* **UI Development:** The user interface was designed and built using React.js. Components were created for Text Content Input, Image Upload, and moderation triggers.
* **Backend Implementation:** The backend was set up on AWS using Lambda functions (contentSubmission, textModerationResponse).
* **Database:** DynamoDB was integrated to store moderation results, flagging content as 'flagged' or 'approved' based on logic.

### 6. Technology Stack

ModSecure utilizes a modern technology stack combining frontend frameworks with powerful cloud-based AI services.

**6.1 Frontend:**
* **React.js:** Used to design and build the User Interface, managing components for input and result display.

**6.2 Cloud Services (Hybrid Approach):**
* **IBM Cloud (Watson NLU):** utilized to analyze emotion, sentiment, categories, and entities within the text.
* **AWS Rekognition:** Used for detecting explicit content in images and videos.
* **AWS Comprehend:** Employed for toxic and harmful text detection.
* **AWS Lambda:** Serverless compute service used to provision functions like `contentSubmission` and `textModerationResponse`.
* **AWS API Gateway:** Created and deployed to manage API endpoints for the application.

**6.3 Development Tools:**
* **VS Code:** For React and Node.js development.
* **AWS Management Console:** For configuring Lambda, Step Functions, and DynamoDB.

### 7. Conclusion and Future Scope

**Conclusion**
ModSecure successfully demonstrates the power of cloud-based workflow automation. By integrating IBM Watson and AWS AI services, the project delivers a consistent and accurate moderation system that reduces manual effort and operational costs. The system ensures instant detection and action on offensive or non-compliant content, making it a vital tool for maintaining safe environments on educational platforms, news portals, and social media.

**Future Scope**
The project has significant potential for expansion:
* **Integration with Multiple Platforms:** Extending the service to diverse platforms like live chats, streaming apps, and gaming communities.
* **Enhanced AI Accuracy:** Incorporating generative AI and large language models (LLMs) to better understand sarcasm, slang, and cultural nuances.
* **Dataset Expansion:** Building a richer, ethically sourced dataset to improve AI training and reduce bias.
* **Scalability Testing:** Optimizing cloud infrastructure to handle millions of requests with minimal latency.

### 8. SWOT Analysis

**8.1 Strengths:**
* **Real-Time Moderation:** Capable of instant detection and action on harmful content.
* **Scalability:** The cloud-based architecture handles high traffic and sudden spikes without performance drops.
* **Accuracy:** AI-based moderation ensures uniform application of rules, reducing human error.
* **Cost Efficiency:** Minimizes repetitive manual review tasks, saving operational costs.

**8.2 Weaknesses:**
* **Learning Curve:** Team members had no prior experience with React, requiring time for learning and trial & error.
* **Complexity:** Managing a hybrid cloud approach (IBM and AWS) requires intricate integration logic.

**8.3 Opportunities:**
* **Market Expansion:** High demand for moderation in online marketplaces and video streaming platforms.
* **Technological Growth:** Opportunity to integrate Generative AI for deeper context understanding.

**8.4 Threats:**
* **Data Privacy:** Handling user-generated content requires strict adherence to privacy laws and ethical sourcing of datasets.
* **Evolving Language:** Slang and cultural nuances change rapidly, potentially outpacing AI training.

### 9. References

[1] IBM Cloud. (2025). *Watson Natural Language Understanding Documentation*. IBM.
[2] Amazon Web Services. (2025). *Amazon Rekognition Developer Guide*. AWS.
[3] ModSecure Team. (2025). *Group 27 Project Presentation: Cloud Based Workflow Automation*. UPES.
[4] React Community. (2025). *React Documentation*. Meta.
"""
    file_path = "ModSecure_Report.md"
    with open(file_path, "w") as f:
        f.write(md_content)
    print(file_path)
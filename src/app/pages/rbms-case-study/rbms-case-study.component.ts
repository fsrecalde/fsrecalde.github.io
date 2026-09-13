import { Component } from "@angular/core"; 
import { RouterLink } from "@angular/router"; 
import { CommonModule } from "@angular/common"; 

@Component({ 
    selector: 'app-rbms', 
    standalone: true, 
    imports: [CommonModule, RouterLink], 
    templateUrl: './rbms-case-study.component.html', 
    styleUrl: './rbms-case-study.component.scss' 
}) 

export class RbmsCaseStudyComponent { 
    shots = [
        ["/assets/rbms/login.png",  "Login Page"], 
        ["/assets/rbms/landing_page.png", "Landing Page (Empty Resident Profile)"], 
        ["/assets/rbms/resident_list.png", "Resident List Module"], 
        ["/assets/rbms/resident_list2.png", "Resident List Module (with pagination)"], 
        ["/assets/rbms/resident_profile.png", "Resident Profile Module"], 
        ["/assets/rbms/roles.png", "Roles Module (Access Control)"],
        ["/assets/rbms/users.png", "Users List"],
        ["/assets/rbms/reports.png", "Reports Module"],
        ["/assets/rbms/audit_trail.png", "Audit Trail Module"],
        ["/assets/rbms/scan_portal.png", "Scan Portal (QR-based workflow)"]

    ]; 
}
// --- Localization Translations ---
const I18N = {
    en: {
        menu_dashboard: "Dashboard",
        menu_rooms: "Rooms View",
        menu_therapists: "Therapists View",
        menu_grid: "Booking Grid",
        menu_settings: "Settings",
        title_dashboard: "Dashboard Overview",
        title_rooms: "Rooms Timeline",
        title_therapists: "Therapists Timeline",
        title_grid: "Booking Log spreadsheet",
        title_settings: "System Settings",
        btn_new_booking: "New Booking",
        stat_total_bookings: "Total Bookings",
        stat_active_bookings: "Active / Checked In",
        stat_room_utilization: "Room Occupancy",
        stat_estimated_revenue: "Estimated Revenue",
        dash_top_services: "Top Service Types",
        dash_channels_demographics: "Channels & Demographics",
        dash_therapist_hours: "Minutes & Hours by Therapist",
        dash_therapist_services: "Services by Therapist",
        sched_view_rooms: "Rooms View",
        sched_view_therapists: "Therapists View",
        sched_legend_occupied: "Occupied Time Blocks",
        filter_all_rooms: "All Rooms",
        filter_all_staff: "All Staff",
        filter_all_payments: "All Payments",
        filter_all_time: "All Time",
        filter_today: "Today",
        filter_yesterday: "Yesterday",
        filter_this_week: "This Week",
        filter_this_month: "This Month",
        filter_last_month: "Last Month",
        filter_custom_period: "Custom Period",
        date_range_to: "to",
        btn_export: "Export CSV",
        btn_import: "Import CSV",
        set_rooms_title: "Rooms Configuration",
        set_rooms_desc: "Define rooms, massage beds, or areas for booking assignments.",
        set_staff_title: "Therapist Directory",
        set_staff_desc: "Manage spa therapists.",
        set_services_title: "Spa Services",
        set_services_desc: "Configure massage types, standard durations, and base prices.",
        set_data_title: "System Diagnostics & Data Controls",
        set_data_desc: "Backup the system, restore to defaults, or load synthetic sample data.",
        set_data_demo_title: "Preload Demo Bookings",
        set_data_demo_desc: "Loads bookings corresponding to the sample spreadsheet sheet.",
        btn_load_demo: "Load Demo Data",
        set_data_reset_title: "Clear Database",
        set_data_reset_desc: "Delete all custom bookings, rooms, and staff records.",
        btn_reset_all: "Reset System",
        btn_add: "Add",
        btn_cancel: "Cancel",
        btn_save: "Save Appointment",
        modal_booking_title_add: "Create New Appointment",
        modal_booking_title_edit: "Edit Appointment Details",
        form_client_name: "Client Name",
        form_phone: "Phone Number",
        form_gender: "Gender",
        form_nationality: "Nationality",
        form_guest_type: "Guest Type",
        form_channel: "Booking Channel",
        form_service: "Service Type",
        form_duration: "Duration (Minutes)",
        form_date: "Service Date",
        form_booking_date: "Booking Made Date",
        form_time_in: "Time In (HH:MM)",
        form_time_out: "Time Out",
        form_room: "Assigned Room",
        form_room_prep: "Room Setup Status",
        form_booked_staff: "Requested Staff",
        form_staff: "Therapist",
        form_payment: "Payment Status",
        form_discount: "Discount",
        form_status: "Client Status",
        form_booking_status: "Booking Status",
        status_booked: "Booked",
        status_confirm: "Confirm",
        status_cancel: "Cancel",
        status_no_male: "Not Male Therapist",
        status_no_female: "Not Enough Female Therapist",
        status_therapist_unavailable: "Booking therapist is not available during booking time",
        status_therapist_off_duty: "Therapist is not on duty",
        pay_already_pay: "already pay",
        pay_yes: "yes (confirmed)",
        pay_unpaid: "unpaid",
        form_block_toggle: "Block Room (Maintenance / Special Case)",
        form_block_reason: "Block Reason / Description",
        form_beds_placeholder: "Beds",
        grid_drag_tip: "Tip: Drag and drop column headers to reorder columns. Order is saved automatically.",
        sched_header_status: "Status",
        opt_unblock: "Unblock",
        opt_block: "Block",
        sched_header_duty: "Duty",
        opt_on_duty: "On Duty",
        opt_off_duty: "Off Duty",
        room_blocked_maintenance: "The room is blocked for maintenance.",
        set_tab_rooms: "Rooms Setup",
        set_tab_staff: "Therapists / Staff",
        set_tab_services: "Services Directory",
        set_tab_payments: "Payment Statuses",
        set_tab_clientStatuses: "Client Status Setup",
        set_tab_discounts: "Discount Options",
        set_tab_data: "Database & Backups",
        set_data_gs_title: "Google Sheets Synchronization",
        set_data_gs_desc: "Expose your database to a shared Google Sheet. Enter your Google Apps Script Web App URL below to sync bookings in real-time.",
        btn_save_gs: "Connect",
        set_tab_brand: "Logo & Branding",
        set_brand_title: "Logo & Branding",
        set_brand_desc: "Upload and manage your custom spa logo. Persistent in browser storage.",
        set_brand_upload_btn: "Upload Custom Logo",
        set_brand_reset_btn: "Reset to Default Logo",
        set_brand_logo_preview: "Logo Preview",
        set_brand_sidebar_logo_tip: "Tip: Click the logo in the top-left sidebar to quickly upload a new one!",
        form_steam_label: "Has Steam",
        col_room: "Room",
        col_beds: "Beds",
        col_steam: "Steam",
        set_payments_title: "Payment Statuses",
        set_payments_desc: "Manage standard payment status indicators (e.g. unpaid, already pay).",
        set_payments_placeholder: "e.g. already pay",
        set_client_statuses_title: "Client Status Setup",
        set_client_statuses_desc: "Manage client type categorization options (e.g. old, new).",
        set_client_statuses_placeholder: "e.g. old (returning client)",
        set_discounts_title: "Discount Options",
        set_discounts_desc: "Define standard discount rates (e.g. 0%, 10%).",
        set_discounts_placeholder: "e.g. 15%",
        set_staff_col_name: "Therapist Name",
        set_staff_col_start_date: "Started Working Date",
        set_staff_col_actions: "Actions",
        form_start_date_label: "Start Date:",
        set_tab_bookingStatuses: "Booking Status Setup",
        set_bookingStatuses_title: "Booking Status Setup",
        set_bookingStatuses_desc: "Manage options for booking status column badges and row highlighting.",
        set_bookingStatuses_placeholder: "e.g. Confirm",
        set_booking_status_col_name: "Status Option",
        set_payments_col_name: "Payment Status",
        set_client_statuses_col_name: "Client Status",
        set_discounts_col_name: "Discount Option",
        menu_reports: "Reports",
        title_reports: "Booking & Analytical Reports",
        report_select_placeholder: "-- Select a Report --",
        report_btn_generate: "Generate Report",
        report_type_revenue: "Revenue & Sales Report",
        report_type_therapist: "Therapist Performance & Utilization",
        report_type_occupancy: "Room Occupancy & Utilization",
        report_type_demographics: "Customer Demographics & Booking Channels",
        report_type_cancellations: "Cancellation Report",
        report_type_unavailability: "Service Unavailability Report",
        report_validation_alert: "Please select a report type first before generating.",
        report_confirm_prompt: "Generate {report} for the period {start} to {end}?",
        report_date_start: "Start Date:",
        report_date_end: "End Date:",
        report_total_bookings: "Total Bookings",
        report_total_revenue: "Total Net Revenue",
        report_avg_revenue: "Average Net Revenue/Booking",
        report_cancelled_count: "Cancelled Bookings",
        report_cancellation_rate: "Cancellation Rate",
        report_total_unavailable: "Total Unavailable Services",
        report_unavailability_rate: "Unavailability Rate",
        report_col_client: "Client Name",
        report_col_service: "Service Type",
        report_col_price: "Base Price",
        report_col_discount: "Discount",
        report_col_payment: "Payment Status",
        report_col_net: "Net Revenue",
        report_col_therapist: "Therapist Name",
        report_col_bookings_count: "Bookings Count",
        report_col_duration: "Total Duration",
        report_col_avg_duration: "Avg Duration/Booking",
        report_col_requested: "Requested Count",
        report_col_room: "Room Name",
        report_col_steam_count: "Steam Usage Count",
        report_col_occupancy: "Occupancy Rate",
        report_col_metric: "Metric / Breakdown",
        report_col_count: "Count",
        report_col_pct: "Percentage",
        report_col_status: "Booking Status",
        report_col_reason: "Unavailability Reason",
        report_col_date: "Date",
        set_tab_channels: "Booking Channels",
        set_channels_title: "Booking Channels Setup",
        set_channels_desc: "Configure booking channel origins (e.g. walk in, Telegram, Facebook).",
        set_channels_placeholder: "e.g. Telegram",
        set_channels_col_name: "Booking Channel"
    },
    kh: {
        menu_dashboard: "ផ្ទាំងគ្រប់គ្រង",
        menu_rooms: "ទិដ្ឋភាពតាមបន្ទប់",
        menu_therapists: "ទិដ្ឋភាពតាមបុគ្គលិក",
        menu_grid: "តារាងកក់ភ្ញៀវ (ប៊ុកឃីង)",
        menu_settings: "ការកំណត់ប្រព័ន្ធ",
        title_dashboard: "របាយការណ៍សង្ខេប",
        title_rooms: "កាលវិភាគបន្ទប់",
        title_therapists: "កាលវិភាគបុគ្គលិក",
        title_grid: "តារាងកត់ត្រាការកក់ភ្ញៀវ",
        title_settings: "ការកំណត់រចនាសម្ព័ន្ធ",
        btn_new_booking: "បង្កើតការកក់ថ្មី",
        stat_total_bookings: "ចំនួនភ្ញៀវកក់សរុប",
        stat_active_bookings: "ភ្ញៀវកំពុងទទួលសេវាកម្ម",
        stat_room_utilization: "អត្រាប្រើប្រាស់បន្ទប់",
        stat_estimated_revenue: "ចំណូលប៉ាន់ស្មាន",
        dash_top_services: "សេវាកម្មពេញនិយមបំផុត",
        dash_channels_demographics: "ប្រភពភ្ញៀវ & ស្ថិតិប្រជាសាស្ត្រ",
        dash_therapist_hours: "រយៈពេលម៉ោងការងារតាមគ្រូម៉ាស្សា",
        dash_therapist_services: "ចំនួនសេវាកម្មតាមគ្រូម៉ាស្សា",
        sched_view_rooms: "ទិដ្ឋភាពតាមបន្ទប់",
        sched_view_therapists: "ទិដ្ឋភាពតាមបុគ្គលិក",
        sched_legend_occupied: "ម៉ោងដែលបានកក់រួច",
        filter_all_rooms: "បន្ទប់ទាំងអស់",
        filter_all_staff: "បុគ្គលិកទាំងអស់",
        filter_all_payments: "ស្ថានភាពបង់ប្រាក់ទាំងអស់",
        filter_all_time: "គ្រប់ពេល",
        filter_today: "ថ្ងៃនេះ",
        filter_yesterday: "ម្សិលមិញ",
        filter_this_week: "សប្តាហ៍នេះ",
        filter_this_month: "ខែនេះ",
        filter_last_month: "ខែមុន",
        filter_custom_period: "រយៈពេលកំណត់",
        date_range_to: "ដល់",
        btn_export: "ទាញយកជា CSV",
        btn_import: "បញ្ចូលឯកសារ CSV",
        set_rooms_title: "ការរៀបចំបន្ទប់/គ្រែ",
        set_rooms_desc: "កំណត់បន្ទប់ ឬកន្លែងផ្តល់សេវាកម្មម៉ាស្សាសម្រាប់ការចាត់ចែង។",
        set_staff_title: "បញ្ជីឈ្មោះបុគ្គលិក/គ្រូបង្គោល",
        set_staff_desc: "គ្រប់គ្រងបញ្ជីឈ្មោះគ្រូម៉ាស្សា។",
        set_services_title: "សៀវភៅសេវាកម្ម",
        set_services_desc: "កំណត់ប្រភេទម៉ាស្សា រយៈពេលស្តង់ដារ និងតម្លៃមូលដ្ឋាន។",
        set_data_title: "ការគ្រប់គ្រងទិន្នន័យ & ការចម្លងទុក",
        set_data_desc: "រក្សាទុកប្រព័ន្ធ ស្ដារឡើងវិញនូវទិន្នន័យដើម ឬផ្ទុកទិន្នន័យគំរូសាកល្បង។",
        set_data_demo_title: "ផ្ទុកទិន្នន័យសាកល្បង",
        set_data_demo_desc: "ផ្ទុកទិន្នន័យការកក់ភ្ញៀវស្របតាមតារាង Excel គំរូ។",
        btn_load_demo: "ទាញទិន្នន័យគំរូ",
        set_data_reset_title: "សម្អាតមូលដ្ឋានទិន្នន័យ",
        set_data_reset_desc: "លុបទិន្នន័យការកក់ បន្ទប់ និងបុគ្គលិកទាំងអស់ចេញពីប្រព័ន្ធ។",
        btn_reset_all: "កំណត់ឡើងវិញទាំងស្រុង",
        btn_add: "បន្ថែម",
        btn_cancel: "បោះបង់",
        btn_save: "រក្សាទុកការកក់",
        modal_booking_title_add: "បង្កើតការកក់ភ្ញៀវថ្មី",
        modal_booking_title_edit: "កែសម្រួលព័ត៌មានការកក់",
        form_client_name: "ឈ្មោះភ្ញៀវ",
        form_phone: "លេខទូរស័ព្ទ",
        form_gender: "ភេទ",
        form_nationality: "សញ្ជាតិភ្ញៀវ",
        form_guest_type: "ប្រភេទភ្ញៀវ",
        form_channel: "កក់តាមរយៈ",
        form_service: "ប្រភេទសេវាកម្ម",
        form_duration: "រយៈពេល (នាទី)",
        form_date: "ថ្ងៃទទួលសេវាកម្ម",
        form_booking_date: "ថ្ងៃកក់ទុកមុន",
        form_time_in: "ម៉ោងចូល",
        form_time_out: "ម៉ោងចេញ",
        form_room: "បន្ទប់ចាត់ចែង",
        form_room_prep: "ស្ថានភាពរៀបចំបន្ទប់",
        form_booked_staff: "បុគ្គលិកដែលភ្ញៀវកក់",
        form_staff: "គ្រូម៉ាស្សា",
        form_payment: "ស្ថានភាពទូទាត់ប្រាក់",
        form_discount: "ការបញ្ចុះតម្លៃ",
        form_status: "ប្រភេទភ្ញៀវ (ចាស់/ថ្មី)",
        form_booking_status: "ស្ថានភាពកក់",
        status_booked: "បានកក់",
        status_confirm: "បញ្ជាក់ការកក់",
        status_cancel: "បោះបង់ការកក់",
        status_no_male: "គ្មានបុគ្គលិកប្រុស",
        status_no_female: "មិនមានបុគ្គលិកស្រីគ្រប់គ្រាន់",
        status_therapist_unavailable: "បុគ្គលិកដែលកក់មិនទំនេរនៅម៉ោងកក់",
        status_therapist_off_duty: "បុគ្គលិកមិនមានវេនការងារ",
        pay_already_pay: "already pay (បង់រួច)",
        pay_yes: "yes (រួចរាល់)",
        pay_unpaid: "unpaid (មិនទាន់បង់)",
        form_block_toggle: "បិទបន្ទប់ (ថែទាំ ឬ ករណីពិសេស)",
        form_block_reason: "មូលហេតុនៃការបិទបន្ទប់",
        form_beds_placeholder: "ចំនួនគ្រែ",
        grid_drag_tip: "ណែនាំ៖ ទាញនិងទម្លាក់ក្បាលជួរឈរ ដើម្បីប្តូរលំដាប់ជួរឈរ។ លំដាប់ត្រូវបានរក្សាទុកដោយស្វ័យប្រវត្តិ។",
        sched_header_status: "ស្ថានភាព",
        opt_unblock: "បើក",
        opt_block: "បិទ",
        sched_header_duty: "វេនការងារ",
        opt_on_duty: "មានវេនការងារ",
        opt_off_duty: "គ្មានវេនការងារ",
        room_blocked_maintenance: "បន្ទប់នេះត្រូវបានបិទសម្រាប់ការថែទាំ។",
        set_tab_rooms: "ការរៀបចំបន្ទប់/គ្រែ",
        set_tab_staff: "បញ្ជីឈ្មោះបុគ្គលិក",
        set_tab_services: "សៀវភៅសេវាកម្ម",
        set_tab_payments: "ស្ថានភាពទូទាត់ប្រាក់",
        set_tab_clientStatuses: "ស្ថានភាពភ្ញៀវ",
        set_tab_discounts: "ជម្រើសបញ្ចុះតម្លៃ",
        set_tab_data: "ទិន្នន័យ & ការចម្លងទុក",
        set_data_gs_title: "សមកាលកម្ម Google Sheets",
        set_data_gs_desc: "ចែករំលែកទិន្នន័យរបស់អ្នកទៅកាន់ Google Sheet។ បញ្ចូលតំណភ្ជាប់ Google Apps Script Web App URL ខាងក្រោមដើម្បីសមកាលកម្មការកក់ភ្លាមៗ។",
        btn_save_gs: "ភ្ជាប់",
        set_tab_brand: "ឡូហ្គោ & ម៉ាកយីហោ",
        set_brand_title: "ឡូហ្គោ & ម៉ាកយីហោ",
        set_brand_desc: "ផ្ទុកឡើង និងគ្រប់គ្រងឡូហ្គោផ្ទាល់ខ្លួនរបស់អ្នក។ រក្សាទុកក្នុងកម្មវិធីរុករករបស់អ្នក។",
        set_brand_upload_btn: "ផ្ទុកឡូហ្គោឡើង",
        set_brand_reset_btn: "កំណត់ឡូហ្គោលំនាំដើមឡើងវិញ",
        set_brand_logo_preview: "ការមើលទិដ្ឋភាពឡូហ្គោ",
        set_brand_sidebar_logo_tip: "ណែនាំ៖ ចុចលើឡូហ្គោនៅផ្នែកខាងលើខាងឆ្វេង ដើម្បីផ្ទុកឡូហ្គោថ្មីឡើងបានភ្លាមៗ!",
        form_steam_label: "មានស្ទីម",
        col_room: "បន្ទប់",
        col_beds: "គ្រែ",
        col_steam: "ស្ទីម",
        set_payments_title: "ស្ថានភាពទូទាត់ប្រាក់",
        set_payments_desc: "គ្រប់គ្រងសូចនាករស្ថានភាពទូទាត់ប្រាក់ស្តង់ដារ (ឧទាហរណ៍៖ មិនទាន់បង់, បង់រួច)។",
        set_payments_placeholder: "ឧទាហរណ៍៖ បង់រួច",
        set_client_statuses_title: "ការកំណត់ស្ថានភាពភ្ញៀវ",
        set_client_statuses_desc: "គ្រប់គ្រងជម្រើសបែងចែកប្រភេទភ្ញៀវ (ឧទាហរណ៍៖ ភ្ញៀវចាស់, ភ្ញៀវថ្មី)។",
        set_client_statuses_placeholder: "ឧទាហរណ៍៖ ចាស់ (ត្រឡប់មកវិញ)",
        set_discounts_title: "ជម្រើសបញ្ចុះតម្លៃ",
        set_discounts_desc: "កំណត់អត្រាបញ្ចុះតម្លៃស្តង់ដារ (ឧទាហរណ៍៖ ០%, ១០%)។",
        set_discounts_placeholder: "ឧទាហរណ៍៖ ១៥%",
        set_staff_col_name: "ឈ្មោះបុគ្គលិក",
        set_staff_col_start_date: "កាលបរិច្ឆេទចាប់ផ្តើមការងារ",
        set_staff_col_actions: "សកម្មភាព",
        form_start_date_label: "ថ្ងៃចាប់ផ្តើមការងារ៖",
        set_tab_bookingStatuses: "ការកំណត់ស្ថានភាពកក់",
        set_bookingStatuses_title: "ការកំណត់ស្ថានភាពកក់",
        set_bookingStatuses_desc: "គ្រប់គ្រងជម្រើសសម្រាប់សូចនាករស្ថានភាពកក់ និងការបន្លិចពណ៌ជួរឈរ។",
        set_bookingStatuses_placeholder: "ឧទាហរណ៍៖ បញ្ជាក់ការកក់",
        set_booking_status_col_name: "ជម្រើសស្ថានភាព",
        set_payments_col_name: "ស្ថានភាពទូទាត់",
        set_client_statuses_col_name: "ស្ថានភាពភ្ញៀវ",
        set_discounts_col_name: "ជម្រើសបញ្ចុះតម្លៃ",
        menu_reports: "របាយការណ៍",
        title_reports: "របាយការណ៍ប៊ុកឃីង និងស្ថិតិវិភាគ",
        report_select_placeholder: "-- សូមជ្រើសរើសរបាយការណ៍ --",
        report_btn_generate: "ទាញយករបាយការណ៍",
        report_type_revenue: "របាយការណ៍ចំណូល និងការលក់",
        report_type_therapist: "របាយការណ៍ការងារ និងប្រសិទ្ធភាពបុគ្គលិក",
        report_type_occupancy: "របាយការណ៍អត្រាប្រើប្រាស់បន្ទប់",
        report_type_demographics: "របាយការណ៍ស្ថិតិភ្ញៀវ និងប្រភពនៃការកក់",
        report_type_cancellations: "របាយការណ៍ការបោះបង់",
        report_type_unavailability: "របាយការណ៍សេវាកម្មមិនអាចផ្តល់ជូនបាន",
        report_validation_alert: "សូមជ្រើសរើសប្រភេទរបាយការណ៍មុនពេលទាញយក។",
        report_confirm_prompt: "តើអ្នកប្រាកដជាចង់ទាញយក {report} សម្រាប់រយៈពេលចាប់ពី {start} ដល់ {end} ឬទេ?",
        report_date_start: "ថ្ងៃចាប់ផ្តើម៖",
        report_date_end: "ថ្ងៃបញ្ចប់៖",
        report_total_bookings: "ចំនួនកក់សរុប",
        report_total_revenue: "ចំណូលសុទ្ធសរុប",
        report_avg_revenue: "ចំណូលសុទ្ធជាមធ្យម/ការកក់",
        report_cancelled_count: "ការកក់ដែលបានបោះបង់",
        report_cancellation_rate: "អត្រាបោះបង់",
        report_total_unavailable: "សេវាកម្មមិនអាចផ្តល់ជូនសរុប",
        report_unavailability_rate: "អត្រាសេវាកម្មមិនអាចផ្តល់ជូន",
        report_col_client: "ឈ្មោះភ្ញៀវ",
        report_col_service: "ប្រភេទសេវាកម្ម",
        report_col_price: "តម្លៃមូលដ្ឋាន",
        report_col_discount: "បញ្ចុះតម្លៃ",
        report_col_payment: "ស្ថានភាពទូទាត់",
        report_col_net: "ចំណូលសុទ្ធ",
        report_col_therapist: "ឈ្មោះបុគ្គលិក",
        report_col_bookings_count: "ចំនួនដងនៃការកក់",
        report_col_duration: "រយៈពេលសរុប",
        report_col_avg_duration: "រយៈពេលមធ្យម/ការកក់",
        report_col_requested: "ចំនួនដងដែលភ្ញៀវចង្អុលចំ",
        report_col_room: "ឈ្មោះបន្ទប់",
        report_col_steam_count: "ចំនួនដងប្រើប្រាស់ស្ទីម",
        report_col_occupancy: "អត្រាប្រើប្រាស់បន្ទប់",
        report_col_metric: "សូចនាករ / ការបែងចែក",
        report_col_count: "ចំនួនដង",
        report_col_pct: "ភាគរយ",
        report_col_status: "ស្ថានភាពកក់",
        report_col_reason: "មូលហេតុមិនអាចផ្តល់ជូនបាន",
        report_col_date: "ថ្ងៃខែឆ្នាំ",
        set_tab_channels: "ប្រភពកក់ (Channels)",
        set_channels_title: "ការកំណត់ប្រភពកក់",
        set_channels_desc: "គ្រប់គ្រងជម្រើសប្រភពនៃការកក់ភ្ញៀវ (ឧទាហរណ៍៖ Telegram, walk in)។",
        set_channels_placeholder: "ឧទាហរណ៍៖ Telegram",
        set_channels_col_name: "ប្រភពនៃការកក់"
    }
};

// --- Application Core State ---
let state = {
    bookings: [],
    rooms: [],
    staff: [],
    services: [],
    payments: ["already pay", "yes", "unpaid"],
    clientStatuses: ["old", "new"],
    discounts: ["0%", "10%", "20%", "30%", "40%"],
    bookingStatuses: ["Booked", "Confirm", "Cancel", "Not Male Therapist", "Not Enough Female Therapist", "Booking therapist is not available during booking time", "Therapist is not on duty"],
    currentLang: "en",
    currentView: "dashboard",
    currentSettingsTab: "rooms",
    schedulerViewType: "rooms",
    theme: "dark",
    customLogo: "",
    columnOrder: [0, 2, 3, 4, 5, 6, 7, 8, 20, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    selectedDate: "", // Selected date for dashboard and timeline views
    tableTitle: "",
    customColumnLabels: {},
    columnWidths: {},
    editingStaffIndex: -1,
    editingRoomIndex: -1,
    editingBookingStatusIndex: -1,
    editingPaymentStatusIndex: -1,
    editingClientStatusIndex: -1,
    editingDiscountIndex: -1,
    editingChannelIndex: -1,
    channels: ["walk in", "call in", "Facebook page", "Telegram"]
};

// Dynamic columns sorting state
let sortDirection = false;
let sortColumnIndex = -1;

// --- Time-Out Notifications Engine ---
const notifiedTimeOuts = new Set();

function getCurrentTimeStr() {
    const now = new Date();
    const currentHrs = String(now.getHours()).padStart(2, '0');
    const currentMins = String(now.getMinutes()).padStart(2, '0');
    return `${currentHrs}:${currentMins}`;
}

function initTimeOutNotifications() {
    const todayISO = getTodayISOString();
    const nowMins = timeToMinutes(getCurrentTimeStr());
    
    state.bookings.forEach(b => {
        if (b.date === todayISO && !b.isBlock && b.timeOut) {
            const timeOutMins = timeToMinutes(b.timeOut);
            // Ignore past bookings that finished more than 5 minutes ago to prevent alert flood on startup
            if (nowMins - timeOutMins > 5) {
                notifiedTimeOuts.add(b.id);
            }
        }
    });
    
    // Initial check and schedule every 30 seconds
    checkTimeOutNotifications();
    setInterval(checkTimeOutNotifications, 30000);
}

function checkTimeOutNotifications() {
    const todayISO = getTodayISOString();
    const nowMins = timeToMinutes(getCurrentTimeStr());
    
    // Clean up bookings in set that are updated to future timeout or different dates
    notifiedTimeOuts.forEach(id => {
        const b = state.bookings.find(bk => bk.id === id);
        if (!b || b.date !== todayISO || timeToMinutes(b.timeOut) > nowMins) {
            notifiedTimeOuts.delete(id);
        }
    });
    
    state.bookings.forEach(b => {
        if (b.date === todayISO && !b.isBlock && b.timeOut) {
            const timeOutMins = timeToMinutes(b.timeOut);
            if (nowMins >= timeOutMins && !notifiedTimeOuts.has(b.id)) {
                notifiedTimeOuts.add(b.id);
                
                const msg = state.currentLang === 'en' ?
                    `Customer "${b.clientName}" in Room ${b.room} has passed the time-out time (${b.timeOut}).` :
                    `អតិថិជន "${b.clientName}" នៅបន្ទប់ ${b.room} បានហួសម៉ោងចេញហើយ (${b.timeOut})។`;
                
                showToast(msg, "warning");
            }
        }
    });
}

// --- Initializing App ---
window.onload = function() {
    state.selectedDate = getTodayISOString(); // Initialize selectedDate to today
    initDatabase();
    updateDateIndicator();
    switchView(state.currentView);
    translatePage();
    renderAllViews();
    initTimeOutNotifications();
    
    if (state.googleSheetUrl) {
        updateGoogleSheetUI();
        pullFromGoogleSheet();
    }
};

function initDatabase() {
    // Attempt loading from localStorage
    const savedBookings = localStorage.getItem("spa_bookings");
    const savedRooms = localStorage.getItem("spa_rooms");
    const savedStaff = localStorage.getItem("spa_staff");
    const savedServices = localStorage.getItem("spa_services");
    const savedPayments = localStorage.getItem("spa_payments");
    const savedClientStatuses = localStorage.getItem("spa_client_statuses");
    const savedDiscounts = localStorage.getItem("spa_discounts");
    const savedBookingStatuses = localStorage.getItem("spa_booking_statuses");
    const savedLang = localStorage.getItem("spa_lang");
    const savedTheme = localStorage.getItem("spa_theme");
    const savedColumnOrder = localStorage.getItem("spa_column_order");
    const savedLogo = localStorage.getItem("spa_logo");
    const savedTableTitle = localStorage.getItem("spa_table_title");
    const savedCustomColumnLabels = localStorage.getItem("spa_custom_column_labels");
    const savedColumnWidths = localStorage.getItem("spa_column_widths");

    state.googleSheetUrl = localStorage.getItem("spa_google_sheet_url") || "";
    if (savedLang) state.currentLang = savedLang;
    state.theme = savedTheme || "dark";
    state.customLogo = savedLogo || "";
    if (savedPayments) state.payments = JSON.parse(savedPayments);
    if (savedClientStatuses) state.clientStatuses = JSON.parse(savedClientStatuses);
    if (savedDiscounts) state.discounts = JSON.parse(savedDiscounts);
    if (savedBookingStatuses) state.bookingStatuses = JSON.parse(savedBookingStatuses);
    const savedChannels = localStorage.getItem("spa_channels");
    if (savedChannels) {
        state.channels = JSON.parse(savedChannels);
    } else {
        state.channels = ["walk in", "call in", "Facebook page", "Telegram"];
    }
    state.tableTitle = savedTableTitle || "";
    state.customColumnLabels = savedCustomColumnLabels ? JSON.parse(savedCustomColumnLabels) : {};
    
    // Revert custom label "Month" for field "date" and "កាលបរិច្ឆេទ" for field "bookingDate" if they exist
    let labelsChanged = false;
    if (state.customColumnLabels && state.customColumnLabels["date"] === "Month") {
        delete state.customColumnLabels["date"];
        labelsChanged = true;
    }
    if (state.customColumnLabels && state.customColumnLabels["bookingDate"] === "កាលបរិច្ឆេទ") {
        delete state.customColumnLabels["bookingDate"];
        labelsChanged = true;
    }
    if (labelsChanged) {
        localStorage.setItem("spa_custom_column_labels", JSON.stringify(state.customColumnLabels));
    }
    
    state.columnWidths = savedColumnWidths ? JSON.parse(savedColumnWidths) : {};
    
    document.body.setAttribute("data-theme", state.theme);
    updateThemeIcons();
    updateSidebarLogo();

    try {
        if (savedColumnOrder) {
            state.columnOrder = JSON.parse(savedColumnOrder);
            const idxOfOne = state.columnOrder.indexOf(1);
            if (idxOfOne !== -1) {
                state.columnOrder.splice(idxOfOne, 1);
            }
            if (!state.columnOrder.includes(19)) {
                state.columnOrder.push(19);
            }
            if (!state.columnOrder.includes(20)) {
                const idxOfEight = state.columnOrder.indexOf(8);
                if (idxOfEight !== -1) {
                    state.columnOrder.splice(idxOfEight + 1, 0, 20);
                } else {
                    state.columnOrder.push(20);
                }
            }
        } else {
            state.columnOrder = [0, 2, 3, 4, 5, 6, 7, 8, 20, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        }

        if (savedBookings && savedRooms && savedStaff && savedServices) {
            state.bookings = JSON.parse(savedBookings);
            state.bookings.forEach(b => {
                if (!b.bookingStatus) b.bookingStatus = "Booked";
            });
            const parsedStaff = JSON.parse(savedStaff);
            if (parsedStaff.length > 0 && (typeof parsedStaff[0] === 'string' || typeof parsedStaff[0] === 'undefined')) {
                state.staff = parsedStaff.map(s => {
                    if (typeof s === 'string') {
                        return { name: s, startDate: getTodayISOString(), isOffDuty: false };
                    } else if (s && s.name) {
                        return { name: s.name, startDate: s.startDate || getTodayISOString(), isOffDuty: s.isOffDuty || false };
                    } else {
                        return { name: "Unknown", startDate: getTodayISOString(), isOffDuty: false };
                    }
                });
                saveToLocalStorage();
            } else {
                state.staff = parsedStaff.map(s => {
                    if (!s.startDate) s.startDate = getTodayISOString();
                    if (s.isOffDuty === undefined) s.isOffDuty = false;
                    return s;
                });
            }
            state.services = JSON.parse(savedServices);
            
            // One-time migration to load the new comprehensive PDF services list
            if (localStorage.getItem("spa_services_migrated_v2") !== "true") {
                state.services = getAuraSpaServices();
                localStorage.setItem("spa_services_migrated_v2", "true");
                saveToLocalStorage();
            }
            
            // Parse and migrate rooms schema
            const parsedRooms = JSON.parse(savedRooms);
            if (parsedRooms.length > 0 && typeof parsedRooms[0] === 'string') {
                state.rooms = parsedRooms.map(r => {
                    let beds = 1;
                    if (r === "11" || r === "12" || r === "13") beds = 2;
                    else if (r.toLowerCase() === "foot") beds = 5;
                    const hasSteam = (r === "11" || r === "12" || r === "13");
                    return { name: r, beds: beds, hasSteam: hasSteam, isBlocked: false };
                });
                saveToLocalStorage();
            } else {
                state.rooms = parsedRooms.map(r => {
                    if (r.isBlocked === undefined) r.isBlocked = false;
                    if (r.hasSteam === undefined) {
                        r.hasSteam = (r.name === "11" || r.name === "12" || r.name === "13");
                    }
                    return r;
                });
            }
            
            // Ensure all rooms and staff referenced in bookings exist in state.rooms/state.staff
            let configChanged = false;
            state.bookings.forEach(b => {
                if (b.room) {
                    const roomExists = state.rooms.some(r => r.name === b.room);
                    if (!roomExists) {
                        let beds = 1;
                        if (b.room === "11" || b.room === "12" || b.room === "13") beds = 2;
                        else if (b.room.toLowerCase() === "foot") beds = 5;
                        const hasSteam = (b.room === "11" || b.room === "12" || b.room === "13");
                        state.rooms.push({ name: b.room, beds: beds, hasSteam: hasSteam, isBlocked: false });
                        configChanged = true;
                    }
                }
                if (b.staff) {
                    const staffExists = state.staff.some(s => {
                        const name = typeof s === 'string' ? s : s.name;
                        return name.toLowerCase() === b.staff.toLowerCase();
                    });
                    if (!staffExists) {
                        state.staff.push({ name: b.staff, startDate: getTodayISOString(), isOffDuty: false });
                        configChanged = true;
                    }
                }
            });
            if (configChanged) {
                saveToLocalStorage();
            }
            
            // Prune bookings older than 1 year to preserve storage limits
            pruneOldBookings();
        } else {
            loadDefaultDatabase();
        }
    } catch (e) {
        console.error("Database parsing failed, resetting to defaults...", e);
        localStorage.clear(); // Reset database
        loadDefaultDatabase();
    }
}

function pruneOldBookings() {
    const oneYearAgo = new Date();
    oneYearAgo.setDate(oneYearAgo.getDate() - 365);
    const oneYearAgoStr = oneYearAgo.toISOString().split('T')[0];
    
    const initialCount = state.bookings.length;
    state.bookings = state.bookings.filter(b => b.date >= oneYearAgoStr);
    
    if (state.bookings.length < initialCount) {
        console.log(`Pruned ${initialCount - state.bookings.length} bookings older than 1 year.`);
        saveToLocalStorage();
    }
}

function getAuraSpaServices() {
    return [
        // Khmer Body Massage
        { name: "Khmer Massage 60mn", duration: "60", price: 15 },
        { name: "Khmer Massage 90mn", duration: "90", price: 21 },
        { name: "Khmer Massage 120mn", duration: "120", price: 27 },
        { name: "Herbal Khmer Massage 60mn", duration: "60", price: 25 },
        { name: "Herbal Khmer Massage 90mn", duration: "90", price: 31 },
        { name: "Herbal Khmer Massage 120mn", duration: "120", price: 37 },
        { name: "4 Hands Herbal Khmer Massage 60mn", duration: "60", price: 35 },
        { name: "4 Hands Herbal Khmer Massage 90mn", duration: "90", price: 41 },
        { name: "4 Hands Herbal Khmer Massage 120mn", duration: "120", price: 47 },

        // Khmer Foot Massage
        { name: "Half Leg Comfort Massage 30mn", duration: "30", price: 9 },
        { name: "Half Leg Comfort Massage 60mn", duration: "60", price: 15 },
        { name: "Half Leg Comfort Massage 90mn", duration: "90", price: 21 },
        { name: "Full Leg Comfort Massage 60mn", duration: "60", price: 18 },
        { name: "Full Leg Comfort Massage 90mn", duration: "90", price: 25 },
        { name: "Herbal Full Leg Comfort Massage 60mn", duration: "60", price: 21 },
        { name: "Herbal Full Leg Comfort Massage 90mn", duration: "90", price: 27 },

        // Natural Body Scrub
        { name: "Coffee 3 Phases Natural Body Glow 90", duration: "90", price: 45 },
        { name: "Ponlei 3 Phases Natural Body Glow 90", duration: "90", price: 45 },
        { name: "Radiance Facial Massage 60", duration: "60", price: 25 },
        { name: "Steam & Coffee Scrub Therapy 60", duration: "60", price: 28 },
        { name: "Steam & Wheat Scrub Therapy 60", duration: "60", price: 28 },
        { name: "Steam & Ponlei Scrub Therapy 60", duration: "60", price: 28 },
        { name: "Steam & Rice Scrub Therapy 60", duration: "60", price: 28 },

        // Chanta Oil Massage Collection
        { name: "Natural Aroma Oil Massage 60mn", duration: "60", price: 25 },
        { name: "Natural Aroma Oil Massage 90mn", duration: "90", price: 35 },
        { name: "Natural Aroma Oil Massage 120mn", duration: "120", price: 45 },
        { name: "Four Hands Harmony 60mn", duration: "60", price: 45 },
        { name: "Swedish Oil Massage 60mn", duration: "60", price: 27 },
        { name: "Swedish Oil Massage 90mn", duration: "90", price: 37 },
        { name: "Premium Aroma Oil Massage 60mn", duration: "60", price: 28 },
        { name: "Premium Aroma Oil Massage 90mn", duration: "90", price: 38 },
        { name: "Premium Aroma Oil Massage 120mn", duration: "120", price: 48 },
        { name: "Stress Relief Oil Massage 60mn", duration: "60", price: 28 },
        { name: "Stress Relief Oil Massage 90mn", duration: "90", price: 38 },
        { name: "Stress Relief Oil Massage 120mn", duration: "120", price: 48 },
        { name: "Herbal Stress Relief Oil Massage 90mn", duration: "90", price: 45 },
        { name: "Herbal Stress Relief Oil Massage 120mn", duration: "120", price: 55 },

        // Jet Lag Recovery Oil Massage
        { name: "Jet Lag Recovery Oil Massage 60mn", duration: "60", price: 28 },
        { name: "Jet Lag Recovery Oil Massage 90mn", duration: "90", price: 38 },
        { name: "Jet Lag Recovery Oil Massage 120mn", duration: "120", price: 48 },
        { name: "Jet Lag + Herbal Compress 90", duration: "90", price: 48 },

        // Deep Tissue Oil Massage
        { name: "Deep Tissue Oil Massage 60mn", duration: "60", price: 28 },
        { name: "Deep Tissue Oil Massage 90mn", duration: "90", price: 38 },
        { name: "Deep Tissue + Herbal 90", duration: "90", price: 45 },

        // Head, Back & Shoulder Massage
        { name: "Relaxing Head Massage 30mn", duration: "30", price: 9 },
        { name: "Relaxing Head Massage 60mn", duration: "60", price: 15 },
        { name: "Head, Back & Shoulder Massage 60mn", duration: "60", price: 22 },
        { name: "Head, Back & Shoulder Massage 90mn", duration: "90", price: 31 },
        { name: "Herbal Head, Back & Shoulder Massage 60mn", duration: "60", price: 28 },
        { name: "Herbal Head, Back & Shoulder Massage 90mn", duration: "90", price: 38 },

        // Herbal Compressed Oil Massage
        { name: "Herbal Compressed Oil Massage 90mn", duration: "90", price: 45 },
        { name: "Herbal Compressed Oil Massage 120mn", duration: "120", price: 55 },

        // Hot Stone Oil Massage
        { name: "Hot Stone Oil Massage 90mn", duration: "90", price: 38 },
        { name: "Hot Stone Oil Massage 120mn", duration: "120", price: 48 },

        // Hot Oil Massage
        { name: "Hot Oil Massage 60mn", duration: "60", price: 30 },
        { name: "Hot Oil Massage 90mn", duration: "90", price: 43 },

        // Relaxation Combo Packages
        { name: "Soft Glow Package 90mn", duration: "90", price: 35 },
        { name: "Soft Glow Package 120mn", duration: "120", price: 45 },
        { name: "Chanta Bliss Trio 120", duration: "120", price: 52 },
        { name: "Chanta Full Relaxation 180", duration: "180", price: 58 },
        { name: "Chanta Harmony Experience 180", duration: "180", price: 75 },
        { name: "Glow & Relax Package 90", duration: "90", price: 35 },
        { name: "Glow & Relax Package 120", duration: "120", price: 45 },
        { name: "Japanese Hair Spa & Relax 120", duration: "120", price: 45 },
        { name: "Chanta Beauty Reset 150", duration: "150", price: 55 },

        // Package for Couple
        { name: "Couple Relax Body Massage 60 (for 2)", duration: "60", price: 22 },
        { name: "Couple Relax Body Massage 90 (for 2)", duration: "90", price: 33 },
        { name: "Chanta Sweet Escape 75 (for 2)", duration: "75", price: 44 },
        { name: "Couple Detox Steam & Massage 105 (for 2)", duration: "105", price: 55 },
        { name: "Couple Smooth & Relax 110 (for 2)", duration: "110", price: 66 },
        { name: "Couple Bliss Retreat 135 (for 2)", duration: "135", price: 77 },
        { name: "Chanta Couple Glow 135 (for 2)", duration: "135", price: 88 },
        { name: "Chanta Love Journey 240 (for 2)", duration: "240", price: 168 },

        // Japanese Hair Care
        { name: "Japanese Hair Wash Ritual (Women) 45mn", duration: "45", price: 15 },
        { name: "Japanese Hair Spa Ritual (Women) 75mn", duration: "75", price: 28 },
        { name: "Japanese Hair Wash Therapy (Men) 30mn", duration: "30", price: 10 },
        { name: "Japanese Hair Spa Therapy (Men) 60mn", duration: "60", price: 22 },

        // Waxing (Smooth & Shine)
        { name: "Waxing - Chin (Women) 20mn", duration: "20", price: 9 },
        { name: "Waxing - Chin (Men) 20mn", duration: "20", price: 9 },
        { name: "Waxing - Under Arms (Women) 20mn", duration: "20", price: 10 },
        { name: "Waxing - Under Arms (Men) 20mn", duration: "20", price: 10 },
        { name: "Waxing - Chest (Women) 20mn", duration: "20", price: 15 },
        { name: "Waxing - Chest (Men) 20mn", duration: "20", price: 25 },
        { name: "Waxing - Belly (Women) 20mn", duration: "20", price: 11 },
        { name: "Waxing - Belly (Men) 20mn", duration: "20", price: 15 },
        { name: "Waxing - Back & Shoulder (Women) 30mn", duration: "30", price: 25 },
        { name: "Waxing - Back & Shoulder (Men) 30mn", duration: "30", price: 35 },
        { name: "Waxing - Half Arms (Women) 20mn", duration: "20", price: 9 },
        { name: "Waxing - Half Arms (Men) 20mn", duration: "20", price: 10 },
        { name: "Waxing - Full Arms (Women) 30mn", duration: "30", price: 15 },
        { name: "Waxing - Full Arms (Men) 30mn", duration: "30", price: 16 },
        { name: "Waxing - Half Legs (Women) 20mn", duration: "20", price: 15 },
        { name: "Waxing - Half Legs (Men) 20mn", duration: "20", price: 18 },
        { name: "Waxing - Full Legs (Women) 30mn", duration: "30", price: 25 },
        { name: "Waxing - Full Legs (Men) 30mn", duration: "30", price: 30 }
    ];
}

function loadDefaultDatabase() {
    state.columnOrder = [0, 2, 3, 4, 5, 6, 7, 8, 20, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    state.rooms = [
        { name: "11", beds: 2, hasSteam: true, isBlocked: false },
        { name: "12", beds: 2, hasSteam: true, isBlocked: false },
        { name: "13", beds: 2, hasSteam: true, isBlocked: false },
        { name: "15", beds: 1, hasSteam: false, isBlocked: false },
        { name: "22", beds: 1, hasSteam: false, isBlocked: false },
        { name: "26", beds: 1, hasSteam: false, isBlocked: false },
        { name: "foot", beds: 5, hasSteam: false, isBlocked: false }
    ];
    state.staff = [
        { name: "ចាន់ធូ", startDate: "2026-06-13", isOffDuty: false },
        { name: "ពិសិដ្ឋ", startDate: "2026-06-13", isOffDuty: false },
        { name: "ស្រីនាថ", startDate: "2026-06-13", isOffDuty: false },
        { name: "ម៉ាណែត", startDate: "2026-06-13", isOffDuty: false },
        { name: "ស្រីនី", startDate: "2026-06-13", isOffDuty: false },
        { name: "លីដា", startDate: "2026-06-13", isOffDuty: false },
        { name: "ណា", startDate: "2026-06-13", isOffDuty: false }
    ];
    state.services = getAuraSpaServices();
    state.payments = ["already pay", "yes", "unpaid"];
    state.clientStatuses = ["old", "new"];
    state.discounts = ["0%", "10%", "20%", "30%", "40%"];
    state.bookingStatuses = ["Booked", "Confirm", "Cancel", "Not Male Therapist", "Not Enough Female Therapist", "Booking therapist is not available during booking time", "Therapist is not on duty"];
    state.bookings = [];
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("spa_bookings", JSON.stringify(state.bookings));
    localStorage.setItem("spa_rooms", JSON.stringify(state.rooms));
    localStorage.setItem("spa_staff", JSON.stringify(state.staff));
    localStorage.setItem("spa_services", JSON.stringify(state.services));
    localStorage.setItem("spa_payments", JSON.stringify(state.payments));
    localStorage.setItem("spa_client_statuses", JSON.stringify(state.clientStatuses));
    localStorage.setItem("spa_discounts", JSON.stringify(state.discounts));
    localStorage.setItem("spa_booking_statuses", JSON.stringify(state.bookingStatuses));
    localStorage.setItem("spa_channels", JSON.stringify(state.channels));
    localStorage.setItem("spa_lang", state.currentLang);
    localStorage.setItem("spa_theme", state.theme);
    localStorage.setItem("spa_column_order", JSON.stringify(state.columnOrder));
    localStorage.setItem("spa_table_title", state.tableTitle);
    localStorage.setItem("spa_custom_column_labels", JSON.stringify(state.customColumnLabels));
    localStorage.setItem("spa_column_widths", JSON.stringify(state.columnWidths));
    if (state.customLogo) {
        localStorage.setItem("spa_logo", state.customLogo);
    } else {
        localStorage.removeItem("spa_logo");
    }
    
    if (state.googleSheetUrl) {
        pushToGoogleSheet();
    }
}

// --- Date & Formatting Helpers ---
function formatDateToDDMMYY(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0].slice(-2)}`;
    }
    return dateStr;
}

function formatDateToDMMMYY(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
        const year = parts[0].slice(-2);
        const monthIdx = parseInt(parts[1]) - 1;
        const day = parseInt(parts[2]);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if (monthIdx >= 0 && monthIdx < 12) {
            return `${day}-${months[monthIdx]}-${year}`;
        }
    }
    return dateStr;
}

const STATUS_TRANSLATIONS = {
    "booked": "status_booked",
    "confirm": "status_confirm",
    "cancel": "status_cancel",
    "not male therapist": "status_no_male",
    "not enough female therapist": "status_no_female",
    "booking therapist is not available during booking time": "status_therapist_unavailable",
    "therapist is not on duty": "status_therapist_off_duty"
};

function getLocalizedBookingStatus(status) {
    if (!status) return "";
    const key = STATUS_TRANSLATIONS[status.toLowerCase()];
    if (key && I18N[state.currentLang] && I18N[state.currentLang][key]) {
        return I18N[state.currentLang][key];
    }
    return status;
}

function toLocalISOString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getDateRangeBoundaries(rangeType) {
    const today = new Date();
    let start = "";
    let end = "";
    
    switch (rangeType) {
        case "today": {
            const todayStr = toLocalISOString(today);
            start = todayStr;
            end = todayStr;
            break;
        }
        case "yesterday": {
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            const yesterdayStr = toLocalISOString(yesterday);
            start = yesterdayStr;
            end = yesterdayStr;
            break;
        }
        case "week": {
            const currentDay = today.getDay();
            const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;
            const monday = new Date(today);
            monday.setDate(today.getDate() + distanceToMonday);
            
            const sunday = new Date(monday);
            sunday.setDate(monday.getDate() + 6);
            
            start = toLocalISOString(monday);
            end = toLocalISOString(sunday);
            break;
        }
        case "month": {
            const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
            const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            start = toLocalISOString(firstDay);
            end = toLocalISOString(lastDay);
            break;
        }
        case "last_month": {
            const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
            const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
            start = toLocalISOString(firstDay);
            end = toLocalISOString(lastDay);
            break;
        }
    }
    return { start, end };
}

function toggleCustomDateInputs() {
    const rangeSelect = document.getElementById("filter-date-range");
    const customContainer = document.getElementById("custom-date-inputs");
    if (rangeSelect && customContainer) {
        if (rangeSelect.value === "custom") {
            customContainer.style.display = "inline-flex";
            
            const startInput = document.getElementById("filter-start-date");
            const endInput = document.getElementById("filter-end-date");
            const todayStr = getTodayISOString();
            if (startInput && !startInput.value) startInput.value = todayStr;
            if (endInput && !endInput.value) endInput.value = todayStr;
        } else {
            customContainer.style.display = "none";
        }
    }
}

function updateDateIndicator() {
    const globalPicker = document.getElementById("global-date-picker");
    const roomsPicker = document.getElementById("rooms-date-picker");
    const therapistsPicker = document.getElementById("therapists-date-picker");
    if (globalPicker) globalPicker.value = state.selectedDate;
    if (roomsPicker) roomsPicker.value = state.selectedDate;
    if (therapistsPicker) therapistsPicker.value = state.selectedDate;
}

function handleGlobalDateChange(dateValue) {
    if (!dateValue) return;
    state.selectedDate = dateValue;
    updateDateIndicator();
    renderAllViews();
}

function getTodayISOString() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// Convert "10:50" to minutes (integer)
function timeToMinutes(timeStr) {
    if (!timeStr) return 0;
    const [hrs, mins] = timeStr.split(":").map(Number);
    return (hrs * 60) + mins;
}

// Convert minutes (integer) to "10:50"
function minutesToTime(mins) {
    const hrs = Math.floor(mins / 60) % 24;
    const m = mins % 60;
    return `${String(hrs).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

// Calculate "10:50" + "1:30" duration -> "12:20"
function calculateTimeOut(timeIn, duration) {
    if (!timeIn || !duration) return "";
    const startMins = timeToMinutes(timeIn);
    
    // Parse duration (could be 1:30 or just 90)
    let durMins = 0;
    if (duration.includes(":")) {
        const [dHrs, dMins] = duration.split(":").map(Number);
        durMins = (dHrs * 60) + dMins;
    } else {
        durMins = parseInt(duration) || 0;
    }
    
    return minutesToTime(startMins + durMins);
}

// Form logic end-time calculator
function calculateEndTime() {
    const timeIn = document.getElementById("book-time-in").value;
    const duration = document.getElementById("book-duration").value;
    const timeOutField = document.getElementById("book-time-out");
    
    if (timeIn && duration) {
        timeOutField.value = calculateTimeOut(timeIn, duration);
    }
}

// Check if two intervals overlap
function isOverlapping(startA, endA, startB, endB) {
    const startMinsA = timeToMinutes(startA);
    const endMinsA = timeToMinutes(endA);
    const startMinsB = timeToMinutes(startB);
    const endMinsB = timeToMinutes(endB);
    
    return startMinsA < endMinsB && startMinsB < endMinsA;
}

// Pre-filled Demo Dataset based on user's spreadsheet image
function getDemoBookings() {
    const todayISO = getTodayISOString();
    // Helper to format date label dynamically based on today's date
    const dObj = new Date(todayISO);
    const dateLabel = dObj.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
    
    return [
        {
            id: "1",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "walk in",
            phone: "",
            channel: "walk in",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "F",
            serviceType: "Herbal oil massage",
            bookedStaff: "",
            staff: "ចាន់ធូ",
            room: "15",
            duration: "2:00",
            timeIn: "10:50",
            timeOut: "12:50",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "40%",
            status: "old"
        },
        {
            id: "2",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "walk in",
            phone: "",
            channel: "walk in",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "M",
            serviceType: "Khmer Body Massage",
            bookedStaff: "ពិសិដ្ឋ",
            staff: "ពិសិដ្ឋ",
            room: "11",
            duration: "1:30",
            timeIn: "13:30",
            timeOut: "15:00",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "10%",
            status: "old"
        },
        {
            id: "3",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "walk in",
            phone: "",
            channel: "walk in",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "M",
            serviceType: "Khmer Body Massage",
            bookedStaff: "ស្រីនាថ",
            staff: "ស្រីនាថ",
            room: "22",
            duration: "1:30",
            timeIn: "14:10",
            timeOut: "15:40",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "10%",
            status: "old"
        },
        {
            id: "4",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "call in",
            phone: "017 493 803",
            channel: "call in",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "F",
            serviceType: "Herbal oil massage",
            bookedStaff: "",
            staff: "ណា",
            room: "15",
            duration: "1:00",
            timeIn: "14:15",
            timeOut: "15:15",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "20%",
            status: "old"
        },
        {
            id: "5",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "Yath Sovan Ney",
            phone: "",
            channel: "Facebook page",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "F",
            serviceType: "Couple Relax Body massage 90",
            bookedStaff: "",
            staff: "ចាន់ធូ",
            room: "11",
            duration: "1:30",
            timeIn: "14:50",
            timeOut: "16:20",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "10%",
            status: "old"
        },
        {
            id: "6",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "Yath Sovan Ney",
            phone: "",
            channel: "Facebook page",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "M",
            serviceType: "Couple Relax Body massage 90",
            bookedStaff: "",
            staff: "ពិសិដ្ឋ",
            room: "11",
            duration: "1:30",
            timeIn: "14:50",
            timeOut: "16:20",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "10%",
            status: "old"
        },
        {
            id: "7",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "walk in",
            phone: "",
            channel: "walk in",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "F",
            serviceType: "Khmer Body Massage",
            bookedStaff: "",
            staff: "ស្រីនាថ",
            room: "26",
            duration: "1:00",
            timeIn: "15:15",
            timeOut: "16:15",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "10%",
            status: "old"
        },
        {
            id: "8",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "walk in",
            phone: "",
            channel: "walk in",
            nationality: "បរទេស",
            guestType: "Normal",
            gender: "F",
            serviceType: "Half leg Comfort Massage",
            bookedStaff: "",
            staff: "ស្រីនី",
            room: "foot",
            duration: "1:30",
            timeIn: "17:15",
            timeOut: "18:45",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "10%",
            status: "new"
        },
        {
            id: "9",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "Srey Mey",
            phone: "",
            channel: "Facebook page",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "F",
            serviceType: "Herbal oil massage",
            bookedStaff: "ស្រីនាថ",
            staff: "ស្រីនាថ",
            room: "12",
            duration: "1:30",
            timeIn: "18:15",
            timeOut: "19:45",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "40%",
            status: "old"
        },
        {
            id: "10",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "Srey Mey",
            phone: "",
            channel: "Facebook page",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "F",
            serviceType: "Herbal oil massage",
            bookedStaff: "លីដា",
            staff: "លីដា",
            room: "12",
            duration: "1:30",
            timeIn: "18:15",
            timeOut: "19:45",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "40%",
            status: "old"
        },
        {
            id: "11",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "Srey Mey",
            phone: "",
            channel: "Facebook page",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "F",
            serviceType: "Natural Aroma Oil Massage",
            bookedStaff: "ម៉ាណែត",
            staff: "ម៉ាណែត",
            room: "13",
            duration: "1:30",
            timeIn: "18:30",
            timeOut: "20:00",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "40%",
            status: "old"
        },
        {
            id: "12",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "Srey Mey",
            phone: "",
            channel: "Facebook page",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "F",
            serviceType: "Natural Aroma Oil Massage",
            bookedStaff: "ណា",
            staff: "ណា",
            room: "13",
            duration: "1:30",
            timeIn: "18:30",
            timeOut: "20:00",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "40%",
            status: "old"
        },
        {
            id: "13",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "walk in",
            phone: "",
            channel: "walk in",
            nationality: "បរទេស",
            guestType: "Normal",
            gender: "F",
            serviceType: "Natural Aroma Oil Massage",
            bookedStaff: "",
            staff: "ចាន់ធូ",
            room: "15",
            duration: "1:30",
            timeIn: "18:30",
            timeOut: "20:00",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "30%",
            status: "new"
        },
        {
            id: "14",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "call in",
            phone: "010 699 679",
            channel: "call in",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "F",
            serviceType: "Natural Aroma Oil Massage",
            bookedStaff: "",
            staff: "លីដា",
            room: "26",
            duration: "1:30",
            timeIn: "18:50",
            timeOut: "20:20",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "already pay",
            discount: "20%",
            status: "old"
        },
        {
            id: "15",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "walk in",
            phone: "",
            channel: "walk in",
            nationality: "បរទេស",
            guestType: "Normal",
            gender: "M",
            serviceType: "Natural Aroma Oil Massage",
            bookedStaff: "",
            staff: "ស្រីនាថ",
            room: "15",
            duration: "1:30",
            timeIn: "20:50",
            timeOut: "22:20",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "yes",
            discount: "30%",
            status: "old"
        },
        {
            id: "16",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "walk in",
            phone: "",
            channel: "walk in",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "M",
            serviceType: "Couple Relax Body massage 90",
            bookedStaff: "ស្រីនី",
            staff: "ស្រីនី",
            room: "11",
            duration: "1:30",
            timeIn: "20:50",
            timeOut: "22:20",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "yes",
            discount: "0%",
            status: "old"
        },
        {
            id: "17",
            date: todayISO,
            dateLabel: dateLabel,
            bookingDate: todayISO,
            clientName: "walk in",
            phone: "",
            channel: "walk in",
            nationality: "ខ្មែរ",
            guestType: "Normal",
            gender: "M",
            serviceType: "Couple Relax Body massage 90",
            bookedStaff: "",
            staff: "ស្រីនី",
            room: "22",
            duration: "1:30",
            timeIn: "20:50",
            timeOut: "22:20",
            roomPrep: "ការរៀបចំបន្ទប់",
            payment: "yes",
            discount: "0%",
            status: "old"
        }
    ].map(b => {
        if (b.duration && b.duration.includes(":")) {
            const [h, m] = b.duration.split(":").map(Number);
            b.duration = String((h * 60) + m);
        }
        return b;
    });
}

// --- Navigation View Switcher ---
function switchView(viewName) {
    if (viewName === 'rooms') {
        state.schedulerViewType = 'rooms';
    } else if (viewName === 'therapists') {
        state.schedulerViewType = 'therapists';
    } else if (viewName === 'reports') {
        initReportsDateInputs();
    }
    state.currentView = viewName;
    
    // Deactivate all nav items & panels
    document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".view-panel").forEach(el => el.classList.remove("active"));
    
    // Activate current
    const activeNavItem = document.getElementById(`nav-${viewName}`);
    if (activeNavItem) activeNavItem.classList.add("active");
    
    const activePanel = document.getElementById(`view-${viewName}`);
    if (activePanel) {
        activePanel.classList.add("active");
        activePanel.scrollTop = 0;
    }
    
    // Set Header Title
    const titleKey = `title_${viewName}`;
    const headerTitle = document.getElementById("current-view-title");
    headerTitle.setAttribute("data-i18n", titleKey);
    
    translatePage();
    renderAllViews();
}

function switchSettingsTab(tabName) {
    state.currentSettingsTab = tabName;
    
    // Set active side link
    document.querySelectorAll(".settings-menu-item").forEach(el => el.classList.remove("active"));
    const activeTabItem = document.getElementById(`set-menu-${tabName}`);
    if (activeTabItem) activeTabItem.classList.add("active");
    
    // Show active panel
    document.querySelectorAll(".settings-tab-panel").forEach(el => el.classList.remove("active"));
    const activeTabPanel = document.getElementById(`settings-tab-${tabName}`);
    if (activeTabPanel) activeTabPanel.classList.add("active");
    
    // Handle scrolling behavior
    if (window.innerWidth <= 1024) {
        // On mobile/tablet, scroll the active panel into view since layout is stacked vertically
        if (activeTabPanel) {
            activeTabPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        // On desktop, scroll the settings scroll container back to the top
        const viewPanel = document.getElementById("view-settings");
        if (viewPanel) {
            viewPanel.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

// --- Translation Engine ---
function setLanguage(lang) {
    state.currentLang = lang;
    
    // Update button states
    document.querySelectorAll(".lang-btn").forEach(el => el.classList.remove("active"));
    document.getElementById(`lang-${lang}`).classList.add("active");
    
    translatePage();
    saveToLocalStorage();
    renderAllViews();
}

function translatePage() {
    const currentTranslations = I18N[state.currentLang];
    
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (currentTranslations[key]) {
            if (element.tagName === "INPUT" && element.hasAttribute("placeholder")) {
                element.setAttribute("placeholder", currentTranslations[key]);
            } else {
                element.textContent = currentTranslations[key];
            }
        }
    });
}

// --- Global Rendering Dispatch ---
function renderAllViews() {
    populateFormDropdowns();
    populateGridFilterDropdowns();
    
    if (state.currentView === "dashboard") {
        renderDashboardView();
    } else if (state.currentView === "rooms" || state.currentView === "therapists") {
        renderTimelineView();
    } else if (state.currentView === "grid") {
        renderGridView();
    } else if (state.currentView === "settings") {
        renderSettingsView();
    } else if (state.currentView === "reports") {
        renderReportsView();
    }
}

// --- Form & Settings Select Populators ---
function populateFormDropdowns(editingBooking = null) {
    // Rooms
    const roomSelect = document.getElementById("book-room");
    roomSelect.innerHTML = "";
    state.rooms.forEach(r => {
        const opt = document.createElement("option");
        opt.value = r.name;
        
        const bedsText = state.currentLang === 'en' ? 
            `${r.beds} ${r.beds === 1 ? 'Bed' : 'Beds'}` : 
            `គ្រែ ${r.beds}`;
        const steamText = r.hasSteam ? 
            (state.currentLang === 'en' ? 'Steam' : 'មានស្ទីម') : 
            (state.currentLang === 'en' ? 'No Steam' : 'គ្មានស្ទីម');
        const blockPrefix = r.isBlocked ? (state.currentLang === 'en' ? '[Blocked] ' : '[បិទ] ') : '';
        opt.textContent = `${blockPrefix}${r.name} (${bedsText}, ${steamText})`;
        
        roomSelect.appendChild(opt);
    });
    
    // Service providers / Staff
    const staffSelect = document.getElementById("book-staff");
    staffSelect.innerHTML = "";
    state.staff.forEach(s => {
        const name = typeof s === 'string' ? s : s.name;
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        staffSelect.appendChild(opt);
    });
    
    // Booked Staff (Requested Staff, includes empty option)
    const bookedStaffSelect = document.getElementById("book-booked-staff");
    bookedStaffSelect.innerHTML = `<option value="">-- ${state.currentLang === 'en' ? 'No Request' : 'គ្មានការកក់'} --</option>`;
    state.staff.forEach(s => {
        const name = typeof s === 'string' ? s : s.name;
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        bookedStaffSelect.appendChild(opt);
    });
    
    // Services Select
    const serviceSelect = document.getElementById("book-service");
    serviceSelect.innerHTML = "";
    state.services.forEach(srv => {
        const opt = document.createElement("option");
        opt.value = srv.name;
        opt.textContent = `${srv.name} (${srv.duration} ${state.currentLang === 'en' ? 'min' : 'នាទី'} - $${srv.price})`;
        serviceSelect.appendChild(opt);
    });

    // Payment Statuses Select
    const paymentSelect = document.getElementById("book-payment");
    if (paymentSelect) {
        paymentSelect.innerHTML = "";
        let paymentOpts = [...state.payments];
        if (editingBooking && editingBooking.payment && !paymentOpts.includes(editingBooking.payment)) {
            paymentOpts.push(editingBooking.payment);
        }
        paymentOpts.forEach(p => {
            const opt = document.createElement("option");
            opt.value = p;
            opt.textContent = p;
            paymentSelect.appendChild(opt);
        });
    }

    // Booking Channels Select
    const channelSelect = document.getElementById("book-channel");
    if (channelSelect) {
        channelSelect.innerHTML = "";
        let channelOpts = [...state.channels];
        if (editingBooking && editingBooking.channel && !channelOpts.includes(editingBooking.channel)) {
            channelOpts.push(editingBooking.channel);
        }
        channelOpts.forEach(c => {
            const opt = document.createElement("option");
            opt.value = c;
            opt.textContent = c;
            channelSelect.appendChild(opt);
        });
    }

    // Client Statuses Select
    const statusSelect = document.getElementById("book-status");
    if (statusSelect) {
        statusSelect.innerHTML = "";
        let statusOpts = [...state.clientStatuses];
        if (editingBooking && editingBooking.status && !statusOpts.includes(editingBooking.status)) {
            statusOpts.push(editingBooking.status);
        }
        statusOpts.forEach(s => {
            const opt = document.createElement("option");
            opt.value = s;
            opt.textContent = s;
            statusSelect.appendChild(opt);
        });
    }

    // Discounts Select
    const discountSelect = document.getElementById("book-discount");
    if (discountSelect) {
        discountSelect.innerHTML = "";
        let discountOpts = [...state.discounts];
        if (editingBooking && editingBooking.discount && !discountOpts.includes(editingBooking.discount)) {
            discountOpts.push(editingBooking.discount);
        }
        discountOpts.forEach(d => {
            const opt = document.createElement("option");
            opt.value = d;
            opt.textContent = d;
            discountSelect.appendChild(opt);
        });
    }

    // Booking Statuses Select
    const bookingStatusSelect = document.getElementById("book-booking-status");
    if (bookingStatusSelect) {
        bookingStatusSelect.innerHTML = "";
        let statusOpts = [...state.bookingStatuses];
        if (editingBooking && editingBooking.bookingStatus && !statusOpts.includes(editingBooking.bookingStatus)) {
            statusOpts.push(editingBooking.bookingStatus);
        }
        statusOpts.forEach(s => {
            const opt = document.createElement("option");
            opt.value = s;
            opt.textContent = getLocalizedBookingStatus(s);
            bookingStatusSelect.appendChild(opt);
        });
    }
}

function populateGridFilterDropdowns() {
    // Room Filter
    const roomFilter = document.getElementById("filter-room");
    const selectedRoomVal = roomFilter.value;
    roomFilter.innerHTML = `<option value="" data-i18n="filter_all_rooms">${I18N[state.currentLang].filter_all_rooms}</option>`;
    state.rooms.forEach(r => {
        const opt = document.createElement("option");
        opt.value = r.name;
        opt.textContent = r.name;
        roomFilter.appendChild(opt);
    });
    roomFilter.value = selectedRoomVal;
    
    // Staff Filter
    const staffFilter = document.getElementById("filter-staff");
    const selectedStaffVal = staffFilter.value;
    staffFilter.innerHTML = `<option value="" data-i18n="filter_all_staff">${I18N[state.currentLang].filter_all_staff}</option>`;
    state.staff.forEach(s => {
        const name = typeof s === 'string' ? s : s.name;
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        staffFilter.appendChild(opt);
    });
    staffFilter.value = selectedStaffVal;

    // Payment Status Filter
    const paymentFilter = document.getElementById("filter-payment");
    if (paymentFilter) {
        const selectedPaymentVal = paymentFilter.value;
        paymentFilter.innerHTML = `<option value="" data-i18n="filter_all_payments">${I18N[state.currentLang].filter_all_payments}</option>`;
        state.payments.forEach(p => {
            const opt = document.createElement("option");
            opt.value = p;
            opt.textContent = p;
            paymentFilter.appendChild(opt);
        });
        paymentFilter.value = selectedPaymentVal;
    }
}

// When service dropdown selection changes, auto-fill duration
function onServiceChanged() {
    const selectedServiceName = document.getElementById("book-service").value;
    const match = state.services.find(s => s.name === selectedServiceName);
    if (match) {
        document.getElementById("book-duration").value = match.duration;
        calculateEndTime();
        checkConflicts();
    }
}

// --- Dashboard Logic & Rendering ---
function renderDashboardView() {
    const selectedDateISO = state.selectedDate || getTodayISOString();
    
    // Filter bookings for the selected date (excluding room blocks)
    const todayBookings = state.bookings.filter(b => b.date === selectedDateISO && !b.isBlock);
    
    // KPI 1: Total Bookings
    document.getElementById("stat-bookings-count").textContent = todayBookings.length;
    
    // KPI 2: Active / Checked In (Now between timeIn and timeOut)
    const now = new Date();
    const currentHrs = String(now.getHours()).padStart(2, '0');
    const currentMins = String(now.getMinutes()).padStart(2, '0');
    const currentTimeStr = `${currentHrs}:${currentMins}`;
    
    const activeBookings = todayBookings.filter(b => {
        return timeToMinutes(currentTimeStr) >= timeToMinutes(b.timeIn) &&
               timeToMinutes(currentTimeStr) <= timeToMinutes(b.timeOut);
    });
    document.getElementById("stat-active-count").textContent = activeBookings.length;
    
    // KPI 3: Room Occupancy Rate
    // Fraction of rooms occupied right now
    const occupiedRoomCount = new Set(activeBookings.map(b => b.room)).size;
    const roomOccupancyRate = state.rooms.length > 0 ? Math.round((occupiedRoomCount / state.rooms.length) * 100) : 0;
    document.getElementById("stat-occupancy-rate").textContent = `${roomOccupancyRate}%`;
    
    // KPI 4: Estimated Revenue
    // Calculate total prices of bookings today
    let totalRev = 0;
    todayBookings.forEach(b => {
        const serviceMatch = state.services.find(s => s.name === b.serviceType);
        let basePrice = serviceMatch ? serviceMatch.price : 0;
        
        // Apply discount if exists (e.g. "40%", "10%")
        if (b.discount) {
            let pct = 0;
            if (typeof b.discount === 'string' && b.discount.includes("%")) {
                pct = parseFloat(b.discount.replace("%", "")) / 100;
            } else if (!isNaN(parseFloat(b.discount))) {
                pct = parseFloat(b.discount) / 100;
            }
            if (!isNaN(pct) && pct >= 0 && pct <= 1) {
                basePrice = basePrice * (1 - pct);
            }
        }
        totalRev += basePrice;
    });
    document.getElementById("stat-revenue-total").textContent = `$${totalRev.toFixed(2)}`;
    
    // Top Services Chart rendering
    const serviceCounts = {};
    todayBookings.forEach(b => {
        serviceCounts[b.serviceType] = (serviceCounts[b.serviceType] || 0) + 1;
    });
    
    const chartContainer = document.getElementById("services-bar-chart");
    chartContainer.innerHTML = "";
    
    const maxCount = Math.max(...Object.values(serviceCounts), 1);
    
    // Display top 5
    const sortedServices = Object.entries(serviceCounts).sort((a,b) => b[1] - a[1]).slice(0, 5);
    
    if (sortedServices.length === 0) {
        chartContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 0.9rem; margin: auto;">No bookings recorded for today.</div>`;
    } else {
        sortedServices.forEach(([serviceName, count]) => {
            const barPct = (count / maxCount) * 100;
            const barWrapper = document.createElement("div");
            barWrapper.className = "chart-bar-wrapper";
            barWrapper.innerHTML = `
                <div class="chart-bar-value">${count}</div>
                <div class="chart-bar-track">
                    <div class="chart-bar" style="height: ${barPct}%;"></div>
                </div>
                <div class="chart-bar-label" title="${serviceName}">${serviceName}</div>
            `;
            chartContainer.appendChild(barWrapper);
        });
    }
    
    // Channels & Demographics lists rendering
    const demographicsList = document.getElementById("demographics-list");
    demographicsList.innerHTML = "";
    
    // Guest Nationalities count
    const nations = { "Khmer (ខ្មែរ)": 0, "Chinese (ចិន)": 0, "Foreigner (បរទេស)": 0 };
    todayBookings.forEach(b => {
        if (b.nationality === "ខ្មែរ") nations["Khmer (ខ្មែរ)"]++;
        else if (b.nationality === "ចិន") nations["Chinese (ចិន)"]++;
        else nations["Foreigner (បរទេស)"]++;
    });
    
    const channels = { "Walk-in": 0, "Call-in": 0, "Social Media": 0 };
    todayBookings.forEach(b => {
        if (b.channel === "walk in") channels["Walk-in"]++;
        else if (b.channel === "call in") channels["Call-in"]++;
        else channels["Social Media"]++;
    });
    
    const totalToday = todayBookings.length || 1;
    
    // Append Nationality
    const natTitle = document.createElement("div");
    natTitle.style.fontWeight = "600";
    natTitle.style.fontSize = "0.85rem";
    natTitle.style.marginBottom = "8px";
    natTitle.style.marginTop = "8px";
    natTitle.textContent = state.currentLang === 'en' ? "Customer Demographics" : "ស្ថិតិប្រជាសាស្ត្រអតិថិជន";
    demographicsList.appendChild(natTitle);
    
    Object.entries(nations).forEach(([nationName, val]) => {
        const pct = Math.round((val / totalToday) * 100);
        const item = document.createElement("div");
        item.className = "analytics-list-item";
        item.innerHTML = `
            <div class="item-meta">
                <span class="item-meta-name">${nationName}</span>
                <span class="item-meta-val">${val} (${pct}%)</span>
            </div>
            <div class="item-progress-track">
                <div class="item-progress-fill" style="width: ${pct}%;"></div>
            </div>
        `;
        demographicsList.appendChild(item);
    });
    
    // Append Channels
    const chanTitle = document.createElement("div");
    chanTitle.style.fontWeight = "600";
    chanTitle.style.fontSize = "0.85rem";
    chanTitle.style.marginBottom = "8px";
    chanTitle.style.marginTop = "16px";
    chanTitle.textContent = state.currentLang === 'en' ? "Booking Channels" : "ប្រភពនៃការកក់ភ្ញៀវ";
    demographicsList.appendChild(chanTitle);
    
    Object.entries(channels).forEach(([chanName, val]) => {
        const pct = Math.round((val / totalToday) * 100);
        const item = document.createElement("div");
        item.className = "analytics-list-item";
        item.innerHTML = `
            <div class="item-meta">
                <span class="item-meta-name">${chanName}</span>
                <span class="item-meta-val">${val} (${pct}%)</span>
            </div>
            <div class="item-progress-track">
                <div class="item-progress-fill" style="width: ${pct}%; background-color: var(--color-info);"></div>
            </div>
        `;
        demographicsList.appendChild(item);
    });

    // 1. Minutes & Hours by Therapist
    const therapistHours = {};
    // Initialize all staff from state.staff with 0 mins
    state.staff.forEach(s => {
        const name = typeof s === 'string' ? s : s.name;
        therapistHours[name] = 0;
    });
    
    // Sum durations
    todayBookings.forEach(b => {
        if (b.staff && therapistHours[b.staff] !== undefined) {
            therapistHours[b.staff] += parseInt(b.duration) || 0;
        }
    });
    

    // Render Hours
    const hoursList = document.getElementById("therapist-hours-list");
    if (hoursList) {
        hoursList.innerHTML = "";
        const sortedHours = Object.entries(therapistHours).sort((a,b) => b[1] - a[1]);
        const maxHours = Math.max(...Object.values(therapistHours), 1);
        
        sortedHours.forEach(([name, mins]) => {
            const pct = Math.round((mins / maxHours) * 100);
            const hrsText = mins > 0 ? `${Math.floor(mins / 60)}h ${mins % 60}m` : (state.currentLang === 'en' ? '0 mins' : '0 នាទី');
            const item = document.createElement("div");
            item.className = "analytics-list-item";
            item.innerHTML = `
                <div class="item-meta">
                    <span class="item-meta-name">${name}</span>
                    <span class="item-meta-val">${hrsText} (${mins}m)</span>
                </div>
                <div class="item-progress-track">
                    <div class="item-progress-fill" style="width: ${pct}%; background-color: var(--accent-gold);"></div>
                </div>
            `;
            hoursList.appendChild(item);
        });
    }

    // Render Services
    const servicesList = document.getElementById("therapist-services-list");
    if (servicesList) {
        servicesList.innerHTML = "";
        
        // Group bookings by therapist
        const therapistBookedServices = {};
        state.staff.forEach(s => {
            const name = typeof s === 'string' ? s : s.name;
            therapistBookedServices[name] = [];
        });
        
        todayBookings.forEach(b => {
            if (b.staff && therapistBookedServices[b.staff] !== undefined) {
                therapistBookedServices[b.staff].push(b.serviceType);
            }
        });
        
        // Sort: busiest therapists first
        const sortedStaffServices = Object.entries(therapistBookedServices).sort((a, b) => b[1].length - a[1].length);
        
        sortedStaffServices.forEach(([name, services]) => {
            const count = services.length;
            const countText = count === 1 ? 
                (state.currentLang === 'en' ? '1 service' : '1 សេវាកម្ម') : 
                (state.currentLang === 'en' ? `${count} services` : `${count} សេវាកម្ម`);
                
            let badgesHTML = "";
            if (count > 0) {
                badgesHTML = `
                    <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; width: 100%;">
                        ${services.map(s => `<span class="badge" style="background-color: var(--bg-tertiary); border: 1px solid var(--border-color); color: var(--text-secondary); font-size: 0.75rem; padding: 2px 8px; border-radius: var(--border-radius-sm); font-weight: 500;">${s}</span>`).join('')}
                    </div>
                `;
            } else {
                badgesHTML = `
                    <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic; margin-top: 4px;">
                        ${state.currentLang === 'en' ? 'No services today' : 'គ្មានសេវាកម្មសម្រាប់ថ្ងៃនេះទេ'}
                    </div>
                `;
            }
            
            const item = document.createElement("div");
            item.style.display = "flex";
            item.style.flexDirection = "column";
            item.style.alignItems = "flex-start";
            item.style.padding = "12px 0";
            item.style.borderBottom = "1px solid var(--border-color)";
            item.innerHTML = `
                <div style="display: flex; justify-content: space-between; width: 100%; font-size: 0.85rem; font-weight: 600; color: var(--text-primary);">
                    <span>${name}</span>
                    <span style="font-size: 0.8rem; color: var(--text-secondary); font-weight: normal;">${countText}</span>
                </div>
                ${badgesHTML}
            `;
            servicesList.appendChild(item);
        });
    }
}

// --- Timeline Scheduler Grid Rendering ---
function setSchedulerViewType(viewType) {
    state.schedulerViewType = viewType;
    document.querySelectorAll(".scheduler-view-btn").forEach(el => el.classList.remove("active"));
    document.getElementById(`btn-schedule-${viewType}`).classList.add("active");
    renderTimelineView();
}

function renderTimelineView() {
    const isRoomView = state.schedulerViewType === "rooms";
    const gridId = isRoomView ? "rooms-timeline-grid" : "therapists-timeline-grid";
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = "";
    
    // 30-minute intervals between 08:00 and 23:00 (15 hours, 30 slots)
    const startTimeMins = timeToMinutes("08:00");
    const endTimeMins = timeToMinutes("23:00");
    const totalSlots = 30; // 15 hours * 2 slots/hour
    
    // Set CSS grid template columns explicitly
    if (isRoomView) {
        grid.style.gridTemplateColumns = `80px 50px 55px 100px repeat(${totalSlots}, 1fr)`;
    } else {
        grid.style.gridTemplateColumns = `160px 100px repeat(${totalSlots}, 1fr)`;
    }
    
    // 1. Create Row 1: Time Headers
    // Header top-left spacer cells
    if (isRoomView) {
        const roomHeader = document.createElement("div");
        roomHeader.className = "timeline-grid-header row-title";
        roomHeader.textContent = state.currentLang === 'en' ? "Room #" : "បន្ទប់ #";
        grid.appendChild(roomHeader);
        
        const bedHeader = document.createElement("div");
        bedHeader.className = "timeline-grid-header row-title";
        bedHeader.textContent = state.currentLang === 'en' ? "#Bed" : "គ្រែ";
        grid.appendChild(bedHeader);

        const steamHeader = document.createElement("div");
        steamHeader.className = "timeline-grid-header row-title";
        steamHeader.textContent = state.currentLang === 'en' ? "Steam" : "ស្ទីម";
        grid.appendChild(steamHeader);
        
        const statusHeader = document.createElement("div");
        statusHeader.className = "timeline-grid-header row-title";
        statusHeader.setAttribute("data-i18n", "sched_header_status");
        statusHeader.textContent = I18N[state.currentLang].sched_header_status;
        grid.appendChild(statusHeader);
    } else {
        const topLeftHeader = document.createElement("div");
        topLeftHeader.className = "timeline-grid-header row-title";
        topLeftHeader.textContent = state.currentLang === 'en' ? "Therapists" : "បុគ្គលិក";
        grid.appendChild(topLeftHeader);
        
        const dutyHeader = document.createElement("div");
        dutyHeader.className = "timeline-grid-header row-title";
        dutyHeader.setAttribute("data-i18n", "sched_header_duty");
        dutyHeader.textContent = I18N[state.currentLang].sched_header_duty;
        grid.appendChild(dutyHeader);
    }
    
    // Hour cells (every 30 mins)
    for (let slot = 0; slot < totalSlots; slot++) {
        const slotMins = startTimeMins + (slot * 30);
        const timeHeaderCell = document.createElement("div");
        timeHeaderCell.className = "timeline-grid-header";
        
        // Show hourly label on every odd slot, otherwise just minutes indicator
        if (slot % 2 === 0) {
            timeHeaderCell.textContent = minutesToTime(slotMins);
        } else {
            timeHeaderCell.textContent = ":" + String(slotMins % 60).padStart(2, '0');
            timeHeaderCell.style.color = "var(--text-muted)";
            timeHeaderCell.style.fontSize = "0.7rem";
        }
        grid.appendChild(timeHeaderCell);
    }
    
    // Filter bookings for the selected date
    const selectedDateISO = state.selectedDate || getTodayISOString();
    const todayBookings = state.bookings.filter(b => b.date === selectedDateISO);
    
    // 2. Draw Row by Row based on selected view (Rooms or Staff)
    const rowsList = isRoomView ? state.rooms : state.staff;
    
    if (rowsList.length === 0) {
        const emptyRow = document.createElement("div");
        emptyRow.style.gridColumn = isRoomView ? `1 / span ${totalSlots + 4}` : `1 / span ${totalSlots + 2}`;
        emptyRow.className = "empty-state";
        emptyRow.textContent = "No data configured. Please configure in settings.";
        grid.appendChild(emptyRow);
        return;
    }
    
    rowsList.forEach(rowItem => {
        let titleCell, dutyCell;
        if (isRoomView) {
            // 1. Room # Cell
            const roomCell = document.createElement("div");
            roomCell.className = "timeline-grid-cell timeline-row-header";
            roomCell.innerHTML = `<span class="highlight-orange" style="font-weight: 700;">${rowItem.name}</span>`;
            grid.appendChild(roomCell);
            
            // 2. Beds Cell
            const bedsCell = document.createElement("div");
            bedsCell.className = "timeline-grid-cell timeline-row-header";
            bedsCell.style.display = "flex";
            bedsCell.style.justifyContent = "center";
            bedsCell.style.alignItems = "center";
            bedsCell.innerHTML = `<span style="font-weight: 600;">${rowItem.beds}</span>`;
            grid.appendChild(bedsCell);
            
            // 3. Steam Cell
            const steamCell = document.createElement("div");
            steamCell.className = "timeline-grid-cell timeline-row-header";
            steamCell.style.display = "flex";
            steamCell.style.justifyContent = "center";
            steamCell.style.alignItems = "center";
            steamCell.innerHTML = `<span style="font-weight: bold; color: var(--brand-rust); font-size: 1.15rem;">${rowItem.hasSteam ? "✓" : ""}</span>`;
            grid.appendChild(steamCell);
            
            // 4. Status Cell
            const statusCell = document.createElement("div");
            statusCell.className = "timeline-grid-cell timeline-row-status";
            const selectHTML = `
                <select class="room-status-select ${rowItem.isBlocked ? 'blocked' : ''}" onchange="toggleRoomBlock('${rowItem.name}', this.value)">
                    <option value="unblock" ${!rowItem.isBlocked ? 'selected' : ''} data-i18n="opt_unblock">${I18N[state.currentLang].opt_unblock}</option>
                    <option value="block" ${rowItem.isBlocked ? 'selected' : ''} data-i18n="opt_block">${I18N[state.currentLang].opt_block}</option>
                </select>
            `;
            statusCell.innerHTML = selectHTML;
            grid.appendChild(statusCell);
        } else {
            // Therapist View: Name cell
            titleCell = document.createElement("div");
            titleCell.className = "timeline-grid-cell timeline-row-header";
            const staffName = typeof rowItem === 'string' ? rowItem : rowItem.name;
            titleCell.innerHTML = `<span class="highlight-yellow">${staffName}</span>`;
            grid.appendChild(titleCell);
            
            // Therapist View: Duty cell
            dutyCell = document.createElement("div");
            dutyCell.className = "timeline-grid-cell timeline-row-status";
            const selectHTML = `
                <select class="room-status-select ${rowItem.isOffDuty ? 'blocked' : ''}" onchange="toggleTherapistDuty('${staffName}', this.value)">
                    <option value="on" ${!rowItem.isOffDuty ? 'selected' : ''} data-i18n="opt_on_duty">${I18N[state.currentLang].opt_on_duty}</option>
                    <option value="off" ${rowItem.isOffDuty ? 'selected' : ''} data-i18n="opt_off_duty">${I18N[state.currentLang].opt_off_duty}</option>
                </select>
            `;
            dutyCell.innerHTML = selectHTML;
            grid.appendChild(dutyCell);
            
            if (rowItem.isOffDuty) {
                titleCell.classList.add("timeline-row-off-duty-bg");
                dutyCell.classList.add("timeline-row-off-duty-bg");
            }
        }
        
        // Create 1 single giant cell that spans all 30 slot columns to hold absolute positioned timeline blocks
        const blocksWrapperCell = document.createElement("div");
        blocksWrapperCell.className = "timeline-grid-cell";
        blocksWrapperCell.style.gridColumn = isRoomView ? `5 / span ${totalSlots}` : `3 / span ${totalSlots}`;
        blocksWrapperCell.style.padding = "0"; // clear padding
        blocksWrapperCell.style.position = "relative";
        
        if (!isRoomView && rowItem.isOffDuty) {
            blocksWrapperCell.classList.add("timeline-row-off-duty-bg");
        }
        
        if (isRoomView && rowItem.isBlocked) {
            blocksWrapperCell.classList.add("timeline-row-blocked-bg");
            blocksWrapperCell.innerHTML = `
                <div class="timeline-row-blocked-text">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 16px; height: 16px; color: var(--text-muted); flex-shrink:0;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span data-i18n="room_blocked_maintenance">${I18N[state.currentLang].room_blocked_maintenance}</span>
                </div>
            `;
            grid.appendChild(blocksWrapperCell);
            return;
        }
        
        // Add vertical dividing gridlines inside the blocksWrapperCell for better styling
        for (let gridline = 1; gridline < totalSlots; gridline++) {
            const line = document.createElement("div");
            line.style.position = "absolute";
            line.style.left = `${(gridline / totalSlots) * 100}%`;
            line.style.top = "0";
            line.style.bottom = "0";
            line.style.width = "1px";
            line.style.backgroundColor = "var(--border-color)";
            line.style.pointerEvents = "none";
            blocksWrapperCell.appendChild(line);
        }
        
        // Filter bookings belonging to this room or therapist
        const rowBookings = todayBookings.filter(b => {
            const name = typeof rowItem === 'string' ? rowItem : rowItem.name;
            return isRoomView ? b.room === rowItem.name : b.staff === name;
        });
        
        // Plot blocks
        rowBookings.forEach(booking => {
            const bStart = timeToMinutes(booking.timeIn);
            const bEnd = timeToMinutes(booking.timeOut);
            
            // Limit within timeline boundary (08:00 - 23:00)
            const viewStart = Math.max(bStart, startTimeMins);
            const viewEnd = Math.min(bEnd, endTimeMins);
            
            if (viewEnd > viewStart) {
                const totalTimelineMins = endTimeMins - startTimeMins;
                
                // Calculate percentage positions
                const leftPct = ((viewStart - startTimeMins) / totalTimelineMins) * 100;
                const widthPct = ((viewEnd - viewStart) / totalTimelineMins) * 100;
                
                const block = document.createElement("div");
                block.className = "timeline-block";
                if (booking.isBlock) {
                    block.classList.add("timeline-block-blocked");
                }
                block.style.left = `${leftPct}%`;
                block.style.width = `${widthPct}%`;
                block.setAttribute("onclick", `editBookingFromTimeline("${booking.id}")`);
                
                // Construct inner text based on scheduler view type and booking type
                if (booking.isBlock) {
                    block.innerHTML = `
                        <span class="block-time">${booking.timeIn} - ${booking.timeOut}</span>
                        <span class="block-service" style="font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.72rem; line-height: 1.2;">🚫 ${state.currentLang === 'en' ? 'Blocked' : 'បិទបន្ទប់'}</span>
                        <span class="block-name" style="color: var(--text-secondary); font-size: 0.68rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px;">${booking.clientName}</span>
                    `;
                } else if (isRoomView) {
                    // Rooms View standard booking: ONLY show therapist name (releasing customer name & channel)
                    block.innerHTML = `
                        <span class="block-time">${booking.timeIn} - ${booking.timeOut}</span>
                        <span class="block-service" style="font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.72rem; line-height: 1.2;">${booking.serviceType}</span>
                        <span class="block-name" style="color: var(--text-secondary); font-size: 0.68rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px;">${booking.staff}</span>
                    `;
                } else {
                    // Therapist View: show Room number
                    block.innerHTML = `
                        <span class="block-time">${booking.timeIn} - ${booking.timeOut}</span>
                        <span class="block-service" style="font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.72rem; line-height: 1.2;">${booking.serviceType}</span>
                        <span class="block-name" style="color: var(--text-secondary); font-size: 0.68rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px;">Room ${booking.room}</span>
                    `;
                }
                blocksWrapperCell.appendChild(block);
            }
        });
        
        grid.appendChild(blocksWrapperCell);
    });
}

function editBookingFromTimeline(bookingId) {
    openBookingModal(bookingId);
}

const TABLE_COLUMNS = [
    { index: 0, label: "កាលបរិច្ឆេទ (Date)", field: "date" },
    { index: 1, label: "ថ្ងៃកក់ (Book Date)", field: "bookingDate" },
    { index: 2, label: "ឈ្មោះ (Name)", field: "clientName" },
    { index: 3, label: "លេខទូរស័ព្ទ (Phone)", field: "phone" },
    { index: 4, label: "តាមរយៈ (Via)", field: "channel" },
    { index: 5, label: "សញ្ជាតិភ្ញៀវ (Nation)", field: "nationality" },
    { index: 6, label: "ប្រភេទភ្ញៀវ (Guest)", field: "guestType" },
    { index: 7, label: "ភេទ (Sex)", field: "gender" },
    { index: 8, label: "ប្រភេទសេវាកម្ម (Service)", field: "serviceType" },
    { index: 9, label: "កក់បុគ្គលិក (Req Staff)", field: "bookedStaff" },
    { index: 10, label: "បុគ្គលិកផ្តល់សេវាកម្ម (Staff)", field: "staff" },
    { index: 11, label: "លេខបន្ទប់ (Room)", field: "room" },
    { index: 12, label: "រយៈពេល (Dur)", field: "duration" },
    { index: 13, label: "ម៉ោងចូល (In)", field: "timeIn" },
    { index: 14, label: "ម៉ោងចេញ (Out)", field: "timeOut" },
    { index: 15, label: "ការរៀបចំបន្ទប់ (Prep)", field: "roomPrep" },
    { index: 16, label: "Payment", field: "payment" },
    { index: 17, label: "Discount", field: "discount" },
    { index: 18, label: "Status", field: "status" },
    { index: 19, label: "ស្ថានភាពកក់ (Booking Status)", field: "bookingStatus" },
    { index: 20, label: "តម្លៃ (Price)", field: "price" }
];

const CELL_BUILDERS = {
    0: (b) => `<td>${formatDateToDDMMYY(b.date)}</td>`,
    1: (b) => `<td>${formatDateToDDMMYY(b.bookingDate)}</td>`,
    2: (b) => `<td><input type="text" class="grid-inline-input" style="font-weight:600;" value="${b.clientName}" data-booking-id="${b.id}" data-field="clientName" onchange="handleInlineFieldChange('${b.id}')"></td>`,
    3: (b) => `<td>${b.phone || '<span style="color:var(--text-muted)">-</span>'}</td>`,
    4: (b) => {
        const channels = [...state.channels];
        if (b.channel && !channels.includes(b.channel)) {
            channels.push(b.channel);
        }
        const optionsHTML = channels.map(c => `<option value="${c}" ${c === b.channel ? 'selected' : ''}>${c}</option>`).join('');
        return `<td><select class="grid-inline-select badge badge-channel" data-booking-id="${b.id}" data-field="channel" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    5: (b) => `<td>${b.nationality}</td>`,
    6: (b) => `<td>${b.guestType}</td>`,
    7: (b) => {
        const genders = ["F", "M", "Other"];
        const badgeClass = b.gender === "F" ? "badge-gender-f" : (b.gender === "M" ? "badge-gender-m" : "badge-status-old");
        const optionsHTML = genders.map(g => `<option value="${g}" ${g === b.gender ? 'selected' : ''}>${g}</option>`).join('');
        return `<td><select class="grid-inline-select badge ${badgeClass}" data-booking-id="${b.id}" data-field="gender" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    8: (b) => {
        let serviceTypes = state.services.map(s => s.name);
        if (b.serviceType && !serviceTypes.includes(b.serviceType)) {
            serviceTypes.push(b.serviceType);
        }
        const optionsHTML = serviceTypes.map(st => `<option value="${st}" ${st === b.serviceType ? 'selected' : ''}>${st}</option>`).join('');
        return `<td><select class="grid-inline-select" style="font-weight: 500;" data-booking-id="${b.id}" data-field="serviceType" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    9: (b) => {
        const bookedStaffCellHTML = b.bookedStaff ? 
            `<span class="highlight-yellow">${b.bookedStaff}</span>` : 
            `<span style="color:var(--text-muted)">-</span>`;
        return `<td>${bookedStaffCellHTML}</td>`;
    },
    10: (b) => {
        let therapists = state.staff.map(s => typeof s === 'string' ? s : s.name);
        if (b.staff && !therapists.includes(b.staff)) {
            therapists.push(b.staff);
        }
        const optionsHTML = therapists.map(t => `<option value="${t}" ${t === b.staff ? 'selected' : ''}>${t}</option>`).join('');
        return `<td><select class="grid-inline-select" style="font-weight: 500;" data-booking-id="${b.id}" data-field="staff" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    11: (b) => {
        let roomsList = state.rooms.map(r => r.name);
        if (b.room && !roomsList.includes(b.room)) {
            roomsList.push(b.room);
        }
        const optionsHTML = roomsList.map(r => `<option value="${r}" ${r === b.room ? 'selected' : ''}>${r}</option>`).join('');
        return `<td><select class="grid-inline-select highlight-orange" data-booking-id="${b.id}" data-field="room" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    12: (b) => {
        let durations = state.services.map(s => String(s.duration));
        durations.push("30", "45", "60", "90", "120", "150", "180");
        durations = [...new Set(durations)].sort((a, b) => parseInt(a) - parseInt(b));
        if (b.duration && !durations.includes(String(b.duration))) {
            durations.push(String(b.duration));
        }
        const optionsHTML = durations.map(d => `<option value="${d}" ${String(d) === String(b.duration) ? 'selected' : ''}>${d}</option>`).join('');
        return `<td><select class="grid-inline-select" data-booking-id="${b.id}" data-field="duration" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    13: (b) => {
        const times = [];
        for (let h = 8; h <= 23; h++) {
            for (let m = 0; m < 60; m += 15) {
                if (h === 23 && m > 0) break;
                const timeStr = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
                times.push(timeStr);
            }
        }
        if (b.timeIn && !times.includes(b.timeIn)) {
            times.push(b.timeIn);
            times.sort();
        }
        const optionsHTML = times.map(t => `<option value="${t}" ${t === b.timeIn ? 'selected' : ''}>${t}</option>`).join('');
        return `<td><select class="grid-inline-select" data-booking-id="${b.id}" data-field="timeIn" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    14: (b) => `<td>${b.timeOut}</td>`,
    15: (b) => `<td>${b.roomPrep || '-'}</td>`,
    16: (b) => {
        let paymentOpts = [...state.payments];
        if (b.payment && !paymentOpts.includes(b.payment)) {
            paymentOpts.push(b.payment);
        }
        const paymentLower = (b.payment || "").toLowerCase();
        const badgeClass = (paymentLower === "already pay" || paymentLower === "yes" || paymentLower === "paid" || paymentLower === "already paid") ? 
            'badge-payment-paid' : 'badge-payment-pending';
        const optionsHTML = paymentOpts.map(p => `<option value="${p}" ${p === b.payment ? 'selected' : ''}>${p}</option>`).join('');
        return `<td><select class="grid-inline-select badge ${badgeClass}" data-booking-id="${b.id}" data-field="payment" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    17: (b) => {
        let discountOpts = [...state.discounts];
        if (b.discount && !discountOpts.includes(b.discount)) {
            discountOpts.push(b.discount);
        }
        const optionsHTML = discountOpts.map(d => `<option value="${d}" ${d === b.discount ? 'selected' : ''}>${d}</option>`).join('');
        return `<td><select class="grid-inline-select" data-booking-id="${b.id}" data-field="discount" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    18: (b) => {
        let statusOpts = [...state.clientStatuses];
        if (b.status && !statusOpts.includes(b.status)) {
            statusOpts.push(b.status);
        }
        const badgeClass = (b.status || "").toLowerCase() === "new" ? 
            'badge-status-new' : 'badge-status-old';
        const optionsHTML = statusOpts.map(s => `<option value="${s}" ${s === b.status ? 'selected' : ''}>${s}</option>`).join('');
        return `<td><select class="grid-inline-select badge ${badgeClass}" data-booking-id="${b.id}" data-field="status" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    19: (b) => {
        let statusOpts = [...state.bookingStatuses];
        if (b.bookingStatus && !statusOpts.includes(b.bookingStatus)) {
            statusOpts.push(b.bookingStatus);
        }
        const status = b.bookingStatus || "Booked";
        let badgeClass = "badge-booking-booked";
        if (status.toLowerCase() === "confirm") badgeClass = "badge-booking-confirm";
        else if (status.toLowerCase() === "cancel") badgeClass = "badge-booking-cancel";
        else if (status.toLowerCase() !== "booked") badgeClass = "badge-booking-other";
        
        const optionsHTML = statusOpts.map(s => `<option value="${s}" ${s === status ? 'selected' : ''}>${getLocalizedBookingStatus(s)}</option>`).join('');
        return `<td><select class="grid-inline-select badge ${badgeClass}" data-booking-id="${b.id}" data-field="bookingStatus" onchange="handleInlineFieldChange('${b.id}', this)">${optionsHTML}</select></td>`;
    },
    20: (b) => {
        const base = getBookingBasePrice(b);
        const net = getBookingNetPrice(b);
        if (net < base) {
            return `<td><span style="text-decoration: line-through; color: var(--text-muted); font-size: 0.85rem; margin-right: 6px;">$${base}</span><span style="font-weight:600; color: var(--accent-gold-text); font-size: 0.95rem;">$${net}</span></td>`;
        }
        return `<td><span style="font-weight: 500; color: var(--text-primary);">$${base}</span></td>`;
    }
};

const BLOCK_CELL_BUILDERS = {
    0: (b) => `<td>${formatDateToDDMMYY(b.date)}</td>`,
    1: (b) => `<td>-</td>`,
    2: (b) => `<td style="font-weight:600; color: var(--text-primary);">${b.clientName}</td>`,
    3: (b) => `<td><span style="color:var(--text-muted)">-</span></td>`,
    4: (b) => `<td><span class="badge badge-channel" style="color:var(--text-muted); opacity: 0.6;">-</span></td>`,
    5: (b) => `<td>-</td>`,
    6: (b) => `<td>-</td>`,
    7: (b) => `<td>-</td>`,
    8: (b) => {
        const serviceBadgeHTML = `<span class="badge" style="background-color: var(--bg-tertiary); color: var(--text-muted); border: 1px solid var(--border-color);">🚫 ${state.currentLang === 'en' ? 'Blocked' : 'បិទបន្ទប់'}</span>`;
        return `<td>${serviceBadgeHTML}</td>`;
    },
    9: (b) => `<td><span style="color:var(--text-muted)">-</span></td>`,
    10: (b) => `<td><span style="color:var(--text-muted)">-</span></td>`,
    11: (b) => `<td><span class="highlight-orange">${b.room}</span></td>`,
    12: (b) => `<td>${b.duration}</td>`,
    13: (b) => `<td>${b.timeIn}</td>`,
    14: (b) => `<td>${b.timeOut}</td>`,
    15: (b) => `<td>-</td>`,
    16: (b) => `<td><span class="badge" style="background-color: var(--bg-tertiary); color: var(--text-muted); border: 1px solid var(--border-color); opacity: 0.6;">-</span></td>`,
    17: (b) => `<td>-</td>`,
    18: (b) => `<td><span class="badge" style="background-color: var(--bg-tertiary); color: var(--text-muted); border: 1px solid var(--border-color); opacity: 0.6;">-</span></td>`,
    19: (b) => `<td>-</td>`,
    20: (b) => `<td>-</td>`
};

let draggedColIdx = null;

function handleDragStart(e, index) {
    draggedColIdx = index;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index);
    e.target.classList.add('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e, index) {
    e.target.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.target.classList.remove('drag-over');
}

function handleDrop(e, index) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    if (draggedColIdx !== null && draggedColIdx !== index) {
        const draggedIndex = state.columnOrder.indexOf(draggedColIdx);
        const targetIndex = state.columnOrder.indexOf(index);
        
        if (draggedIndex !== -1 && targetIndex !== -1) {
            state.columnOrder.splice(draggedIndex, 1);
            state.columnOrder.splice(targetIndex, 0, draggedColIdx);
            
            localStorage.setItem("spa_column_order", JSON.stringify(state.columnOrder));
            renderGridView();
            showToast("Column order rearranged!", "info");
        }
    }
    draggedColIdx = null;
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    document.querySelectorAll('.draggable-header').forEach(el => {
        el.classList.remove('drag-over');
        el.classList.remove('dragging');
    });
    draggedColIdx = null;
}

// --- Spreadsheet Booking Grid Logic ---
function renderGridView() {
    updateTableTitleDisplay();
    
    const tableHead = document.getElementById("booking-table-head");
    const tableBody = document.getElementById("booking-table-body");
    tableBody.innerHTML = "";
    
    // Render dynamic table head
    if (tableHead) {
        let headHTML = "<tr>";
        state.columnOrder.forEach(colIndex => {
            const col = TABLE_COLUMNS[colIndex];
            const savedWidth = state.columnWidths[col.field];
            const widthStyle = savedWidth ? `width: ${savedWidth}px; min-width: ${savedWidth}px; max-width: ${savedWidth}px;` : '';
            const colLabel = (state.customColumnLabels && state.customColumnLabels[col.field]) || col.label;
            
            headHTML += `<th draggable="true" 
                             ondragstart="handleDragStart(event, ${colIndex})" 
                             ondragover="handleDragOver(event)" 
                             ondragenter="handleDragEnter(event, ${colIndex})" 
                             ondragleave="handleDragLeave(event)" 
                             ondragend="handleDragEnd(event)" 
                             ondrop="handleDrop(event, ${colIndex})" 
                             onclick="sortTable(${colIndex})" 
                             ondblclick="editColumnHeader(event, ${colIndex})"
                             style="cursor: grab; position: relative; ${widthStyle}"
                             class="draggable-header"
                             data-field="${col.field}"
                             title="Click to sort, Hover to see edit option, Double-click to rename"><span class="th-label-text">${colLabel}</span><button class="col-edit-btn" onclick="editColumnHeaderBtn(event, ${colIndex})" title="Edit Column Title" style="background: transparent; border: none; cursor: pointer; padding: 2px; display: inline-flex; align-items: center; justify-content: center; margin-left: 4px; vertical-align: middle;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 12px; height: 12px; color: var(--text-muted);"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg></button><div class="th-resizer"></div></th>`;
        });
        headHTML += `<th style="width: 100px; min-width: 100px;">Actions</th></tr>`;
        tableHead.innerHTML = headHTML;
    }
    
    // Get current filters
    const searchVal = document.getElementById("grid-search").value.toLowerCase();
    const roomFilterVal = document.getElementById("filter-room").value;
    const staffFilterVal = document.getElementById("filter-staff").value;
    const paymentFilterVal = document.getElementById("filter-payment").value;
    
    // Sort and filter bookings
    let filteredBookings = [...state.bookings];
    
    if (searchVal) {
        filteredBookings = filteredBookings.filter(b => 
            b.clientName.toLowerCase().includes(searchVal) || 
            b.phone.includes(searchVal) || 
            b.serviceType.toLowerCase().includes(searchVal)
        );
    }
    if (roomFilterVal) {
        filteredBookings = filteredBookings.filter(b => b.room === roomFilterVal);
    }
    if (staffFilterVal) {
        filteredBookings = filteredBookings.filter(b => b.staff === staffFilterVal);
    }
    if (paymentFilterVal) {
        filteredBookings = filteredBookings.filter(b => b.payment === paymentFilterVal);
    }
    
    // Filter by Date Range
    const dateRangeSelect = document.getElementById("filter-date-range");
    const dateRangeVal = dateRangeSelect ? dateRangeSelect.value : "all";
    if (dateRangeVal !== "all") {
        let start = "";
        let end = "";
        
        if (dateRangeVal === "custom") {
            start = document.getElementById("filter-start-date").value;
            end = document.getElementById("filter-end-date").value;
        } else {
            const boundaries = getDateRangeBoundaries(dateRangeVal);
            start = boundaries.start;
            end = boundaries.end;
        }
        
        if (start) {
            filteredBookings = filteredBookings.filter(b => b.date >= start);
        }
        if (end) {
            filteredBookings = filteredBookings.filter(b => b.date <= end);
        }
    }
    
    if (filteredBookings.length === 0) {
        const emptyRow = document.createElement("tr");
        emptyRow.innerHTML = `<td colspan="20" class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <p>No bookings matching search filters.</p>
        </td>`;
        tableBody.appendChild(emptyRow);
        initColumnResizers(); // Initialize resizers even if empty
        return;
    }
    
    filteredBookings.forEach(booking => {
        const row = document.createElement("tr");
        
        if (booking.isBlock) {
            row.classList.add("row-blocked");
            let rowHTML = "";
            state.columnOrder.forEach(colIndex => {
                rowHTML += BLOCK_CELL_BUILDERS[colIndex](booking);
            });
            rowHTML += `
                <td>
                    <div class="table-actions">
                        <button class="action-icon-btn" onclick="openBookingModal('${booking.id}')" title="Edit Block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                        <button class="action-icon-btn delete" onclick="deleteBooking('${booking.id}')" title="Delete Block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </td>
            `;
            row.innerHTML = rowHTML;
        } else {
            const status = (booking.bookingStatus || "Booked").toLowerCase();
            if (status === "confirm") {
                row.classList.add("row-booking-confirm");
            } else if (status === "cancel") {
                row.classList.add("row-booking-cancel");
            } else if (status !== "booked") {
                row.classList.add("row-booking-other");
            }
            
            let rowHTML = "";
            state.columnOrder.forEach(colIndex => {
                rowHTML += CELL_BUILDERS[colIndex](booking);
            });
            rowHTML += `
                <td>
                    <div class="table-actions">
                        <button id="save-btn-${booking.id}" class="action-icon-btn save-btn" onclick="saveRowBooking('${booking.id}')" title="Save Changes" style="opacity: 0.3; pointer-events: none; color: var(--color-success);">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8l-4-4H8zm4 12a3 3 0 110-6 3 3 0 010 6zm-4-8V5h7v3H8z" />
                            </svg>
                        </button>
                        <button class="action-icon-btn" onclick="openBookingModal('${booking.id}')" title="Edit Booking">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                        <button class="action-icon-btn delete" onclick="deleteBooking('${booking.id}')" title="Delete Booking">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </td>
            `;
            row.innerHTML = rowHTML;
        }
        tableBody.appendChild(row);
    });
    
    initColumnResizers();
}

function applyGridFilters() {
    renderGridView();
}

// Columns sorting functionality
function sortTable(colIndex) {
    if (sortColumnIndex === colIndex) {
        sortDirection = !sortDirection; // toggle direction
    } else {
        sortColumnIndex = colIndex;
        sortDirection = true; // ascending default
    }
    
    const fields = [
        "date", "bookingDate", "clientName", "phone", "channel", "nationality", 
        "guestType", "gender", "serviceType", "bookedStaff", "staff", "room", 
        "duration", "timeIn", "timeOut", "roomPrep", "payment", "discount", "status"
    ];
    
    const fieldName = fields[colIndex];
    if (!fieldName) return;
    
    state.bookings.sort((a, b) => {
        let valA = a[fieldName] ? a[fieldName].toString().toLowerCase() : "";
        let valB = b[fieldName] ? b[fieldName].toString().toLowerCase() : "";
        
        if (fieldName === "date" || fieldName === "bookingDate") {
            valA = new Date(a[fieldName]);
            valB = new Date(b[fieldName]);
        }
        
        if (valA < valB) return sortDirection ? -1 : 1;
        if (valA > valB) return sortDirection ? 1 : -1;
        return 0;
    });
    
    renderGridView();
}

function toggleBlockFormMode() {
    const isBlocked = document.getElementById("book-is-block").checked;
    
    // Toggle display flex/none for all .customer-only elements
    document.querySelectorAll(".customer-only").forEach(el => {
        el.style.display = isBlocked ? "none" : "flex";
    });
    
    // Toggle required attributes for hidden fields
    const fields = ["book-gender", "book-nationality", "book-guest-type", "book-channel", "book-service", "book-booking-date", "book-staff", "book-payment", "book-status"];
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (isBlocked) {
                el.removeAttribute("required");
            } else {
                el.setAttribute("required", "required");
            }
        }
    });
    
    // Swap label i18n key
    const labelSpan = document.querySelector("#label-client-name span[data-i18n]");
    if (labelSpan) {
        labelSpan.setAttribute("data-i18n", isBlocked ? "form_block_reason" : "form_client_name");
    }
    
    // Run translation to update the label text in the current language
    translatePage();
}

// --- Booking Add / Edit Dialog Manager ---
function openBookingModal(bookingId = null) {
    const modal = document.getElementById("booking-modal");
    const form = document.getElementById("booking-form");
    form.reset();
    
    // Clear conflicts alert
    const banner = document.getElementById("conflict-banner");
    banner.className = "conflict-banner";
    banner.style.display = "none";
    
    let booking = null;
    if (bookingId) {
        booking = state.bookings.find(b => b.id === bookingId);
    }
    populateFormDropdowns(booking);
    
    if (bookingId) {
        // Edit Mode
        document.getElementById("modal-booking-title").setAttribute("data-i18n", "modal_booking_title_edit");
        
        if (booking) {
            document.getElementById("booking-id").value = booking.id;
            document.getElementById("book-is-block").checked = booking.isBlock === true;
            document.getElementById("book-client-name").value = booking.clientName;
            document.getElementById("book-phone").value = booking.phone || "";
            document.getElementById("book-gender").value = booking.gender || "F";
            document.getElementById("book-nationality").value = booking.nationality || "ខ្មែរ";
            document.getElementById("book-guest-type").value = booking.guestType || "Normal";
            document.getElementById("book-channel").value = booking.channel || "walk in";
            document.getElementById("book-service").value = booking.serviceType || "";
            document.getElementById("book-duration").value = booking.duration;
            document.getElementById("book-date").value = booking.date;
            document.getElementById("book-booking-date").value = booking.bookingDate;
            document.getElementById("book-time-in").value = booking.timeIn;
            document.getElementById("book-time-out").value = booking.timeOut;
            document.getElementById("book-room").value = booking.room;
            document.getElementById("book-room-prep").value = booking.roomPrep || "ការរៀបចំបន្ទប់";
            document.getElementById("book-booked-staff").value = booking.bookedStaff || "";
            document.getElementById("book-staff").value = booking.staff || "";
            document.getElementById("book-payment").value = booking.payment || "unpaid";
            document.getElementById("book-discount").value = booking.discount || "0%";
            document.getElementById("book-status").value = booking.status || "old";
            const bookingStatusSelect = document.getElementById("book-booking-status");
            if (bookingStatusSelect) {
                bookingStatusSelect.value = booking.bookingStatus || "Booked";
            }
        }
    } else {
        // Add Mode
        document.getElementById("modal-booking-title").setAttribute("data-i18n", "modal_booking_title_add");
        document.getElementById("booking-id").value = "";
        document.getElementById("book-is-block").checked = false;
        
        // Auto-fill dates with today
        const todayStr = getTodayISOString();
        document.getElementById("book-date").value = todayStr;
        document.getElementById("book-booking-date").value = todayStr;
        
        // Set standard default values
        document.getElementById("book-gender").value = "F";
        document.getElementById("book-nationality").value = "ខ្មែរ";
        document.getElementById("book-guest-type").value = "Normal";
        document.getElementById("book-channel").value = "Telegram";
        
        // Set standard default durations
        if (state.services.length > 0) {
            document.getElementById("book-service").value = state.services[0].name;
        }
        document.getElementById("book-duration").value = "60";

        // Select standard defaults if available in state
        const paymentSelect = document.getElementById("book-payment");
        if (paymentSelect) {
            if (state.payments.includes("unpaid")) {
                paymentSelect.value = "unpaid";
            } else if (state.payments.length > 0) {
                paymentSelect.value = state.payments[0];
            }
        }

        const discountSelect = document.getElementById("book-discount");
        if (discountSelect) {
            if (state.discounts.includes("0%")) {
                discountSelect.value = "0%";
            } else if (state.discounts.length > 0) {
                discountSelect.value = state.discounts[0];
            }
        }

        const statusSelect = document.getElementById("book-status");
        if (statusSelect) {
            if (state.clientStatuses.includes("old")) {
                statusSelect.value = "old";
            } else if (state.clientStatuses.length > 0) {
                statusSelect.value = state.clientStatuses[0];
            }
        }
        
        const bookingStatusSelect = document.getElementById("book-booking-status");
        if (bookingStatusSelect) {
            bookingStatusSelect.value = "Booked";
        }
    }
    
    toggleBlockFormMode();
    translatePage();
    updateRoomScheduleHint();
    updateTherapistScheduleHint();
    modal.classList.add("active");
}

function closeBookingModal() {
    document.getElementById("booking-modal").classList.remove("active");
}

// Get validation double-booking conflict message for a booking configuration
function getBookingConflictMessage(bData) {
    const bookingId = bData.id;
    const date = bData.date;
    const timeIn = bData.timeIn;
    const duration = bData.duration;
    const room = bData.room;
    const staff = bData.staff;
    const isBlocked = bData.isBlock;
    
    if (!date || !timeIn || !duration) {
        return "";
    }
    
    const timeOut = calculateTimeOut(timeIn, duration);
    
    // Check global room block status
    const roomObj = state.rooms.find(r => r.name === room);
    if (roomObj && roomObj.isBlocked) {
        return state.currentLang === 'en' ? 
            `Room ${room} is currently blocked for maintenance.` : 
            `បន្ទប់ ${room} ត្រូវបានបិទសម្រាប់ការថែទាំ។`;
    }
    
    // Check global staff off duty status
    if (staff && staff !== "គ្មាន" && staff !== "") {
        const staffObj = state.staff.find(s => s.name === staff);
        if (staffObj && staffObj.isOffDuty) {
            return state.currentLang === 'en' ? 
                `Therapist ${staff} is currently off duty.` : 
                `បុគ្គលិក ${staff} មិនមានវេនការងារទេ។`;
        }
    }
    
    const maxBeds = roomObj ? (parseInt(roomObj.beds) || 1) : 1;
    
    const roomOverlaps = [];
    let isRoomBlockedOverlapping = false;
    let blockOverlappingDetail = null;
    
    // Scan all bookings for room conflicts
    for (const b of state.bookings) {
        if (b.id === bookingId) continue; // skip self
        if (b.date !== date) continue; // skip different dates
        
        if (isOverlapping(timeIn, timeOut, b.timeIn, b.timeOut)) {
            if (b.room === room) {
                if (b.isBlock) {
                    isRoomBlockedOverlapping = true;
                    blockOverlappingDetail = b;
                } else {
                    roomOverlaps.push(b);
                }
            }
        }
    }
    
    if (isRoomBlockedOverlapping) {
        return state.currentLang === 'en' ? 
            `Room ${room} is blocked for: ${blockOverlappingDetail.clientName} (${blockOverlappingDetail.timeIn} - ${blockOverlappingDetail.timeOut})` :
            `បន្ទប់ ${room} ត្រូវបានបិទសម្រាប់៖ ${blockOverlappingDetail.clientName} (${blockOverlappingDetail.timeIn} - ${blockOverlappingDetail.timeOut})`;
    }
    
    if (isBlocked && roomOverlaps.length > 0) {
        const details = roomOverlaps.map(b => `${b.clientName} (${b.timeIn} - ${b.timeOut})`).join(", ");
        return state.currentLang === 'en' ?
            `Room ${room} has active bookings: ${details}. Cannot block room.` :
            `បន្ទប់ ${room} មានការកក់សកម្ម៖ ${details}។ មិនអាចបិទបន្ទប់បានទេ។`;
    }
    
    if (roomOverlaps.length > 0) {
        const exceedsCapacity = (roomOverlaps.length + 1) > maxBeds;
        const clientDetails = roomOverlaps.map(b => `${b.clientName} (${b.timeIn} - ${b.timeOut})`).join(", ");
        
        if (exceedsCapacity) {
            return state.currentLang === 'en' ?
                `Room ${room} is already booked by ${clientDetails} (Exceeds capacity of ${maxBeds} ${maxBeds === 1 ? 'bed' : 'beds'}).` :
                `បន្ទប់ ${room} ត្រូវបានកក់ដោយ ${clientDetails} រួចហើយ (លើសចំណុះគ្រែ ${maxBeds})។`;
        } else {
            return state.currentLang === 'en' ?
                `Room ${room} is already booked by ${clientDetails}.` :
                `បន្ទប់ ${room} ត្រូវបានកក់ដោយ ${clientDetails} រួចហើយ។`;
        }
    }
    
    // Scan all bookings for therapist conflicts
    for (const b of state.bookings) {
        if (b.id === bookingId) continue;
        if (b.date !== date) continue;
        
        if (isOverlapping(timeIn, timeOut, b.timeIn, b.timeOut)) {
            if (!isBlocked && !b.isBlock && b.staff === staff && staff !== "គ្មាន" && staff !== "" && staff !== undefined) {
                return state.currentLang === 'en' ? 
                    `Therapist ${staff} is already assigned to ${b.clientName} (${b.timeIn} - ${b.timeOut})` :
                    `បុគ្គលិក ${staff} ត្រូវបានចាត់តាំងឱ្យ ${b.clientName} រួចហើយ (${b.timeIn} - ${b.timeOut})`;
            }
        }
    }
    
    return "";
}

// Check real-time double bookings (Rooms and Staff)
function checkConflicts() {
    const bookingId = document.getElementById("booking-id").value;
    const date = document.getElementById("book-date").value;
    const timeIn = document.getElementById("book-time-in").value;
    const duration = document.getElementById("book-duration").value;
    const room = document.getElementById("book-room").value;
    const staff = document.getElementById("book-staff").value;
    const isBlocked = document.getElementById("book-is-block").checked;
    
    const banner = document.getElementById("conflict-banner");
    const bannerText = document.getElementById("conflict-message");
    
    const bData = { id: bookingId, date, timeIn, duration, room, staff, isBlock: isBlocked };
    const conflictMsg = getBookingConflictMessage(bData);
    
    if (conflictMsg) {
        bannerText.textContent = conflictMsg;
        banner.style.display = "flex";
        banner.classList.add("active");
    } else {
        banner.style.display = "none";
        banner.classList.remove("active");
    }
}

// Update inline select elements badge class based on selected option
function updateInlineSelectStyles(selectEl) {
    const field = selectEl.getAttribute("data-field");
    const val = selectEl.value;
    
    if (field === "gender") {
        selectEl.className = "grid-inline-select badge " + (val === "F" ? "badge-gender-f" : (val === "M" ? "badge-gender-m" : "badge-status-old"));
    } else if (field === "payment") {
        const paymentLower = val.toLowerCase();
        const isPaid = paymentLower === "already pay" || paymentLower === "yes" || paymentLower === "paid" || paymentLower === "already paid";
        selectEl.className = "grid-inline-select badge " + (isPaid ? "badge-payment-paid" : "badge-payment-pending");
    } else if (field === "status") {
        selectEl.className = "grid-inline-select badge " + (val.toLowerCase() === "new" ? "badge-status-new" : "badge-status-old");
    } else if (field === "bookingStatus") {
        let badgeClass = "badge-booking-booked";
        if (val.toLowerCase() === "confirm") badgeClass = "badge-booking-confirm";
        else if (val.toLowerCase() === "cancel") badgeClass = "badge-booking-cancel";
        else if (val.toLowerCase() !== "booked") badgeClass = "badge-booking-other";
        selectEl.className = "grid-inline-select badge " + badgeClass;
    }
}

// Handler called when any select element is modified inline
function handleInlineFieldChange(bookingId, selectEl) {
    if (selectEl) {
        updateInlineSelectStyles(selectEl);
    }
    
    // Enable the save button for this row
    const saveBtn = document.getElementById(`save-btn-${bookingId}`);
    if (saveBtn) {
        saveBtn.style.opacity = "1";
        saveBtn.style.pointerEvents = "auto";
    }
    
    // Auto-save the booking immediately to synchronize all views
    saveRowBooking(bookingId);
}

// Scrape inline changes, compute timeout, check conflicts and save row to localStorage
function saveRowBooking(bookingId) {
    const booking = state.bookings.find(b => b.id === bookingId);
    if (!booking) {
        showToast("Booking not found", "error");
        return;
    }
    
    // Find all editable fields (select and input) for this booking
    const editables = document.querySelectorAll(`[data-booking-id="${bookingId}"]`);
    const updatedValues = {};
    editables.forEach(el => {
        const field = el.getAttribute("data-field");
        updatedValues[field] = el.value;
    });
    
    // Clone booking and apply changes
    const updatedBooking = { ...booking, ...updatedValues };
    
    // Calculate new timeOut if timeIn or duration changed
    if (updatedValues.timeIn || updatedValues.duration) {
        updatedBooking.timeOut = calculateTimeOut(updatedBooking.timeIn, updatedBooking.duration);
    }
    
    // Check conflicts
    const conflictMsg = getBookingConflictMessage(updatedBooking);
    if (conflictMsg) {
        const confirmMsg = state.currentLang === 'en' ? 
            `${conflictMsg}\n\nDo you want to save anyway?` : 
            `${conflictMsg}\n\nតើអ្នកពិតជាចង់រក្សាទុកមែនទេ?`;
        if (!confirm(confirmMsg)) {
            return;
        }
    }
    
    // Save to state and update views
    const idx = state.bookings.findIndex(b => b.id === bookingId);
    if (idx !== -1) {
        state.bookings[idx] = updatedBooking;
        saveToLocalStorage();
        showToast("Booking updated inline successfully!", "success");
        renderAllViews();
    }
}

function saveBooking(event) {
    event.preventDefault();
    
    const bookingId = document.getElementById("booking-id").value;
    const isBlocked = document.getElementById("book-is-block").checked;
    
    // Gather inputs
    const clientName = document.getElementById("book-client-name").value;
    const phone = isBlocked ? "" : document.getElementById("book-phone").value;
    const gender = isBlocked ? "Other" : document.getElementById("book-gender").value;
    const nationality = isBlocked ? "ខ្មែរ" : document.getElementById("book-nationality").value;
    const guestType = isBlocked ? "Normal" : document.getElementById("book-guest-type").value;
    const channel = isBlocked ? "walk in" : document.getElementById("book-channel").value;
    const serviceType = isBlocked ? "Room Blocked" : document.getElementById("book-service").value;
    const duration = document.getElementById("book-duration").value;
    const date = document.getElementById("book-date").value;
    const bookingDate = isBlocked ? date : document.getElementById("book-booking-date").value;
    const timeIn = document.getElementById("book-time-in").value;
    const room = document.getElementById("book-room").value;
    const roomPrep = isBlocked ? "" : document.getElementById("book-room-prep").value;
    const bookedStaff = isBlocked ? "" : document.getElementById("book-booked-staff").value;
    const staff = isBlocked ? "" : document.getElementById("book-staff").value;
    const payment = isBlocked ? "unpaid" : document.getElementById("book-payment").value;
    const discount = isBlocked ? "0%" : document.getElementById("book-discount").value;
    const status = isBlocked ? "old" : document.getElementById("book-status").value;
    const bookingStatus = isBlocked ? "Booked" : (document.getElementById("book-booking-status") ? document.getElementById("book-booking-status").value : "Booked");
    
    const timeOut = calculateTimeOut(timeIn, duration);
    
    // Formulate pretty label for date e.g. "12-Jun"
    const dObj = new Date(date);
    const dateLabel = dObj.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
    
    const bookingData = {
        id: bookingId || String(Date.now()),
        isBlock: isBlocked,
        date,
        dateLabel,
        bookingDate,
        clientName,
        phone,
        gender,
        nationality,
        guestType,
        channel,
        serviceType,
        duration,
        timeIn,
        timeOut,
        room,
        roomPrep,
        bookedStaff,
        staff,
        payment,
        discount,
        status,
        bookingStatus
    };
    
    if (bookingId) {
        // Edit Mode
        const idx = state.bookings.findIndex(b => b.id === bookingId);
        if (idx !== -1) {
            state.bookings[idx] = bookingData;
            showToast("Appointment updated successfully!", "success");
        }
    } else {
        // Add Mode
        state.bookings.push(bookingData);
        showToast("New appointment created successfully!", "success");
    }
    
    saveToLocalStorage();
    closeBookingModal();
    renderAllViews();
}

function deleteBooking(bookingId) {
    const confirmMsg = state.currentLang === 'en' ? 
        "Are you sure you want to delete this booking?" : 
        "តើអ្នកពិតជាចង់លុបការកក់នេះមែនទេ?";
        
    if (confirm(confirmMsg)) {
        state.bookings = state.bookings.filter(b => b.id !== bookingId);
        saveToLocalStorage();
        showToast("Booking deleted.", "warning");
        renderAllViews();
    }
}

// --- Settings Directory Management ---
function renderSettingsView() {
    // Rooms
    const roomsList = document.getElementById("rooms-config-list");
    roomsList.innerHTML = "";
    state.rooms.forEach((r, idx) => {
        const item = document.createElement("tr");
        
        const bedsText = state.currentLang === 'en' ? 
            `${r.beds} ${r.beds === 1 ? 'Bed' : 'Beds'}` : 
            `គ្រែ ${r.beds}`;
            
        const steamText = r.hasSteam ? 
            (state.currentLang === 'en' ? 'Steam' : 'មានស្ទីម') : 
            (state.currentLang === 'en' ? 'No Steam' : 'គ្មានស្ទីម');
            
        const isEditing = state.editingRoomIndex === idx;
        
        if (isEditing) {
            item.innerHTML = `
                <td style="text-align: left; padding: 6px 16px;">
                    <input type="text" id="edit-room-name-${idx}" class="input-field" value="${r.name}" style="padding: 6px 10px; font-size: 0.9rem; width: 100%; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); background-color: var(--bg-primary); color: var(--text-primary);">
                </td>
                <td style="text-align: right; padding-right: 24px; padding-top: 6px; padding-bottom: 6px;">
                    <input type="number" id="edit-room-beds-${idx}" class="input-field" value="${r.beds}" min="1" style="padding: 6px 10px; font-size: 0.9rem; width: 80px; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); background-color: var(--bg-primary); color: var(--text-primary); text-align: right; display: inline-block;">
                </td>
                <td style="text-align: right; padding-right: 24px; padding-top: 6px; padding-bottom: 6px;">
                    <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.9rem; font-weight: 500; color: var(--text-secondary); white-space: nowrap;">
                        <input type="checkbox" id="edit-room-steam-${idx}" ${r.hasSteam ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px; accent-color: var(--brand-rust);">
                    </label>
                </td>
                <td style="text-align: center;">
                    <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                        <button class="action-icon-btn" onclick="saveRoomItem(${idx})" title="Save Changes" style="color: var(--color-success);">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 12m0 0-4.5 4.5M12 12V3.75m-8.25 12h16.5" />
                            </svg>
                        </button>
                        <button class="action-icon-btn" onclick="cancelRoomEdit()" title="Cancel" style="color: var(--text-secondary);">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <button class="action-icon-btn delete" onclick="deleteConfigItem('rooms', ${idx})" title="Delete Room">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </td>
            `;
        } else {
            item.innerHTML = `
                <td style="text-align: left; font-weight: 600; color: var(--text-primary);">${r.name}</td>
                <td style="text-align: right; padding-right: 24px; font-weight: 600; color: var(--text-primary);">${r.beds}</td>
                <td style="text-align: right; padding-right: 24px; font-weight: 600; color: ${r.hasSteam ? 'var(--brand-rust)' : 'var(--text-muted)'};">${steamText}</td>
                <td style="text-align: center;">
                    <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                        <button class="action-icon-btn" onclick="editRoomItem(${idx})" title="Edit Room" style="color: var(--accent-gold-text);">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 20.82a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                        <button class="action-icon-btn delete" onclick="deleteConfigItem('rooms', ${idx})" title="Delete Room">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </td>
            `;
        }
        roomsList.appendChild(item);
    });
    
    // Staff / Therapists
    const staffList = document.getElementById("staff-config-list");
    staffList.innerHTML = "";
    state.staff.forEach((s, idx) => {
        const item = document.createElement("tr");
        const name = typeof s === 'string' ? s : s.name;
        const rawDate = typeof s === 'string' ? '' : s.startDate;
        const formattedDate = formatDateToDMMMYY(rawDate) || '--/--/--';
        
        const isEditing = state.editingStaffIndex === idx;
        
        if (isEditing) {
            item.innerHTML = `
                <td style="text-align: left; padding: 6px 16px;">
                    <input type="text" id="edit-staff-name-${idx}" class="input-field" value="${name}" style="padding: 6px 10px; font-size: 0.9rem; width: 100%; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); background-color: var(--bg-primary); color: var(--text-primary);">
                </td>
                <td style="text-align: right; padding-right: 48px; padding-top: 6px; padding-bottom: 6px;">
                    <input type="date" id="edit-staff-date-${idx}" class="input-field filter-date-input" value="${rawDate}" style="padding: 6px 12px; height: 34px; font-size: 0.9rem; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); background-color: var(--bg-primary); color: var(--text-primary); text-align: right; width: auto; display: inline-block;">
                </td>
                <td style="text-align: center;">
                    <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                        <button class="action-icon-btn" onclick="saveStaffItem(${idx})" title="Save Changes" style="color: var(--color-success);">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 12m0 0-4.5 4.5M12 12V3.75m-8.25 12h16.5" />
                            </svg>
                        </button>
                        <button class="action-icon-btn" onclick="cancelStaffEdit()" title="Cancel" style="color: var(--text-secondary);">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <button class="action-icon-btn delete" onclick="deleteConfigItem('staff', ${idx})" title="Delete Therapist">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </td>
            `;
        } else {
            item.innerHTML = `
                <td style="text-align: left; font-weight: 600; color: var(--text-primary);">${name}</td>
                <td style="text-align: right; padding-right: 48px; font-weight: 600; color: var(--brand-rust);">${formattedDate}</td>
                <td style="text-align: center;">
                    <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                        <button class="action-icon-btn" onclick="editStaffItem(${idx})" title="Edit Therapist" style="color: var(--accent-gold-text);">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 20.82a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                        <button class="action-icon-btn delete" onclick="deleteConfigItem('staff', ${idx})" title="Delete Therapist">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </td>
            `;
        }
        staffList.appendChild(item);
    });
    
    // Services
    const servicesList = document.getElementById("services-config-list");
    servicesList.innerHTML = "";
    state.services.forEach((srv, idx) => {
        const item = document.createElement("div");
        item.className = "config-item";
        item.innerHTML = `
            <div class="config-item-info">
                <span class="config-item-name">${srv.name}</span>
                <span class="config-item-detail">${srv.duration} mins • $${srv.price}</span>
            </div>
            <button class="action-icon-btn delete" onclick="deleteConfigItem('services', ${idx})" title="Delete Service">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        `;
        servicesList.appendChild(item);
    });

    // Payments
    const paymentsList = document.getElementById("payments-config-list");
    if (paymentsList) {
        paymentsList.innerHTML = "";
        state.payments.forEach((p, idx) => {
            const item = document.createElement("tr");
            const isEditing = state.editingPaymentStatusIndex === idx;
            
            if (isEditing) {
                item.innerHTML = `
                    <td style="text-align: left; padding: 6px 16px;">
                        <input type="text" id="edit-payment-name-${idx}" class="input-field" value="${p}" style="padding: 6px 10px; font-size: 0.9rem; width: 100%; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); background-color: var(--bg-primary); color: var(--text-primary);">
                    </td>
                    <td style="text-align: center;">
                        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                            <button class="action-icon-btn" onclick="savePaymentItem(${idx})" title="Save Changes" style="color: var(--color-success);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 12m0 0-4.5 4.5M12 12V3.75m-8.25 12h16.5" />
                                </svg>
                            </button>
                            <button class="action-icon-btn" onclick="cancelPaymentEdit()" title="Cancel" style="color: var(--text-secondary);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <button class="action-icon-btn delete" onclick="deleteConfigItem('payments', ${idx})" title="Delete Payment Status">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
            } else {
                item.innerHTML = `
                    <td style="text-align: left; font-weight: 600; color: var(--text-primary);">${p}</td>
                    <td style="text-align: center;">
                        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                            <button class="action-icon-btn" onclick="editPaymentItem(${idx})" title="Edit Payment Status" style="color: var(--accent-gold-text);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 20.82a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </button>
                            <button class="action-icon-btn delete" onclick="deleteConfigItem('payments', ${idx})" title="Delete Payment Status">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
            }
            paymentsList.appendChild(item);
        });
    }

    // Client Statuses
    const clientStatusesList = document.getElementById("clientStatuses-config-list");
    if (clientStatusesList) {
        clientStatusesList.innerHTML = "";
        state.clientStatuses.forEach((cs, idx) => {
            const item = document.createElement("tr");
            const isEditing = state.editingClientStatusIndex === idx;
            
            if (isEditing) {
                item.innerHTML = `
                    <td style="text-align: left; padding: 6px 16px;">
                        <input type="text" id="edit-clientStatus-name-${idx}" class="input-field" value="${cs}" style="padding: 6px 10px; font-size: 0.9rem; width: 100%; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); background-color: var(--bg-primary); color: var(--text-primary);">
                    </td>
                    <td style="text-align: center;">
                        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                            <button class="action-icon-btn" onclick="saveClientStatusItem(${idx})" title="Save Changes" style="color: var(--color-success);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 12m0 0-4.5 4.5M12 12V3.75m-8.25 12h16.5" />
                                </svg>
                            </button>
                            <button class="action-icon-btn" onclick="cancelClientStatusEdit()" title="Cancel" style="color: var(--text-secondary);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <button class="action-icon-btn delete" onclick="deleteConfigItem('clientStatuses', ${idx})" title="Delete Client Status">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
            } else {
                item.innerHTML = `
                    <td style="text-align: left; font-weight: 600; color: var(--text-primary);">${cs}</td>
                    <td style="text-align: center;">
                        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                            <button class="action-icon-btn" onclick="editClientStatusItem(${idx})" title="Edit Client Status" style="color: var(--accent-gold-text);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 20.82a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </button>
                            <button class="action-icon-btn delete" onclick="deleteConfigItem('clientStatuses', ${idx})" title="Delete Client Status">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
            }
            clientStatusesList.appendChild(item);
        });
    }

    // Discounts
    const discountsList = document.getElementById("discounts-config-list");
    if (discountsList) {
        discountsList.innerHTML = "";
        state.discounts.forEach((d, idx) => {
            const item = document.createElement("tr");
            const isEditing = state.editingDiscountIndex === idx;
            
            if (isEditing) {
                item.innerHTML = `
                    <td style="text-align: left; padding: 6px 16px;">
                        <input type="text" id="edit-discount-name-${idx}" class="input-field" value="${d}" style="padding: 6px 10px; font-size: 0.9rem; width: 100%; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); background-color: var(--bg-primary); color: var(--text-primary);">
                    </td>
                    <td style="text-align: center;">
                        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                            <button class="action-icon-btn" onclick="saveDiscountItem(${idx})" title="Save Changes" style="color: var(--color-success);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 12m0 0-4.5 4.5M12 12V3.75m-8.25 12h16.5" />
                                </svg>
                            </button>
                            <button class="action-icon-btn" onclick="cancelDiscountEdit()" title="Cancel" style="color: var(--text-secondary);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <button class="action-icon-btn delete" onclick="deleteConfigItem('discounts', ${idx})" title="Delete Discount Option">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
            } else {
                item.innerHTML = `
                    <td style="text-align: left; font-weight: 600; color: var(--text-primary);">${d}</td>
                    <td style="text-align: center;">
                        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                            <button class="action-icon-btn" onclick="editDiscountItem(${idx})" title="Edit Discount Option" style="color: var(--accent-gold-text);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 20.82a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </button>
                            <button class="action-icon-btn delete" onclick="deleteConfigItem('discounts', ${idx})" title="Delete Discount Option">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
            }
            discountsList.appendChild(item);
        });
    }

    // Booking Statuses
    const bookingStatusesList = document.getElementById("bookingStatuses-config-list");
    if (bookingStatusesList) {
        bookingStatusesList.innerHTML = "";
        state.bookingStatuses.forEach((bs, idx) => {
            const item = document.createElement("tr");
            const displayName = getLocalizedBookingStatus(bs);
            const labelText = displayName !== bs ? `${bs} (${displayName})` : bs;
            
            const isEditing = state.editingBookingStatusIndex === idx;
            
            if (isEditing) {
                item.innerHTML = `
                    <td style="text-align: left; padding: 6px 16px;">
                        <input type="text" id="edit-bookingStatus-name-${idx}" class="input-field" value="${bs}" style="padding: 6px 10px; font-size: 0.9rem; width: 100%; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); background-color: var(--bg-primary); color: var(--text-primary);">
                    </td>
                    <td style="text-align: center;">
                        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                            <button class="action-icon-btn" onclick="saveBookingStatusItem(${idx})" title="Save Changes" style="color: var(--color-success);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 12m0 0-4.5 4.5M12 12V3.75m-8.25 12h16.5" />
                                </svg>
                            </button>
                            <button class="action-icon-btn" onclick="cancelBookingStatusEdit()" title="Cancel" style="color: var(--text-secondary);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <button class="action-icon-btn delete" onclick="deleteConfigItem('bookingStatuses', ${idx})" title="Delete Booking Status">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
            } else {
                item.innerHTML = `
                    <td style="text-align: left; font-weight: 600; color: var(--text-primary);">${labelText}</td>
                    <td style="text-align: center;">
                        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                            <button class="action-icon-btn" onclick="editBookingStatusItem(${idx})" title="Edit Booking Status" style="color: var(--accent-gold-text);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 20.82a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </button>
                            <button class="action-icon-btn delete" onclick="deleteConfigItem('bookingStatuses', ${idx})" title="Delete Booking Status">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
            }
            bookingStatusesList.appendChild(item);
        });
    }

    // Booking Channels
    const channelsList = document.getElementById("channels-config-list");
    if (channelsList) {
        channelsList.innerHTML = "";
        state.channels.forEach((c, idx) => {
            const item = document.createElement("tr");
            const isEditing = state.editingChannelIndex === idx;
            
            if (isEditing) {
                item.innerHTML = `
                    <td style="text-align: left; padding: 6px 16px;">
                        <input type="text" id="edit-channel-name-${idx}" class="input-field" value="${c}" style="padding: 6px 10px; font-size: 0.9rem; width: 100%; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); background-color: var(--bg-primary); color: var(--text-primary);">
                    </td>
                    <td style="text-align: center;">
                        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                            <button class="action-icon-btn" onclick="saveChannelItem(${idx})" title="Save Changes" style="color: var(--color-success);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 12m0 0-4.5 4.5M12 12V3.75m-8.25 12h16.5" />
                                </svg>
                            </button>
                            <button class="action-icon-btn" onclick="cancelChannelEdit()" title="Cancel" style="color: var(--text-secondary);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <button class="action-icon-btn delete" onclick="deleteConfigItem('channels', ${idx})" title="Delete Booking Channel">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
            } else {
                item.innerHTML = `
                    <td style="text-align: left; font-weight: 600; color: var(--text-primary);">${c}</td>
                    <td style="text-align: center;">
                        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
                            <button class="action-icon-btn" onclick="editChannelItem(${idx})" title="Edit Booking Channel" style="color: var(--accent-gold-text);">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 20.82a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </button>
                            <button class="action-icon-btn delete" onclick="deleteConfigItem('channels', ${idx})" title="Delete Booking Channel">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:16px;height:16px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
            }
            channelsList.appendChild(item);
        });
    }
    
    // Set default value for therapist start date input
    const staffStartDateField = document.getElementById("new-staff-start-date");
    if (staffStartDateField && !staffStartDateField.value) {
        staffStartDateField.value = getTodayISOString();
    }
    
    // Custom Logo Preview
    renderLogoPreview();
}

function addConfigItem(event, type) {
    event.preventDefault();
    if (type === 'rooms') {
        const nameField = document.getElementById("new-room-name");
        const bedsField = document.getElementById("new-room-beds");
        const steamField = document.getElementById("new-room-steam");
        const val = nameField.value.trim();
        const bedsVal = parseInt(bedsField.value) || 1;
        const hasSteam = steamField ? steamField.checked : false;
        
        const exists = state.rooms.some(r => r.name.toLowerCase() === val.toLowerCase());
        if (val && !exists) {
            state.rooms.push({ name: val, beds: bedsVal, hasSteam: hasSteam, isBlocked: false });
            nameField.value = "";
            if (bedsField) bedsField.value = "1";
            if (steamField) steamField.checked = false;
            const steamText = hasSteam ? (state.currentLang === 'en' ? 'with Steam' : 'មានស្ទីម') : (state.currentLang === 'en' ? 'no Steam' : 'គ្មានស្ទីម');
            showToast(`Room ${val} (${bedsVal} beds, ${steamText}) added.`, "success");
        } else if (exists) {
            showToast(`Room ${val} already exists.`, "warning");
        }
    } else if (type === 'staff') {
        const nameField = document.getElementById("new-staff-name");
        const startDateField = document.getElementById("new-staff-start-date");
        const val = nameField.value.trim();
        const startDateVal = startDateField ? startDateField.value : getTodayISOString();
        
        const exists = state.staff.some(s => {
            const name = typeof s === 'string' ? s : s.name;
            return name.toLowerCase() === val.toLowerCase();
        });
        
        if (val && !exists) {
            state.staff.push({ name: val, startDate: startDateVal, isOffDuty: false });
            nameField.value = "";
            if (startDateField) startDateField.value = getTodayISOString();
            showToast(`Therapist ${val} added.`, "success");
        } else if (exists) {
            showToast(`Therapist ${val} already exists.`, "warning");
        }
    } else if (type === 'payments') {
        const nameField = document.getElementById("new-payment-name");
        const val = nameField.value.trim();
        if (val && !state.payments.includes(val)) {
            state.payments.push(val);
            nameField.value = "";
            showToast(`Payment status "${val}" added.`, "success");
        } else if (val) {
            showToast(`Payment status "${val}" already exists.`, "warning");
        }
    } else if (type === 'clientStatuses') {
        const nameField = document.getElementById("new-clientStatus-name");
        const val = nameField.value.trim();
        if (val && !state.clientStatuses.includes(val)) {
            state.clientStatuses.push(val);
            nameField.value = "";
            showToast(`Client status "${val}" added.`, "success");
        } else if (val) {
            showToast(`Client status "${val}" already exists.`, "warning");
        }
    } else if (type === 'discounts') {
        const nameField = document.getElementById("new-discount-name");
        const val = nameField.value.trim();
        if (val && !state.discounts.includes(val)) {
            state.discounts.push(val);
            nameField.value = "";
            showToast(`Discount "${val}" added.`, "success");
        } else if (val) {
            showToast(`Discount "${val}" already exists.`, "warning");
        }
    } else if (type === 'bookingStatuses') {
        const nameField = document.getElementById("new-bookingStatus-name");
        const val = nameField.value.trim();
        if (val && !state.bookingStatuses.includes(val)) {
            state.bookingStatuses.push(val);
            nameField.value = "";
            showToast(`Booking status "${val}" added.`, "success");
        } else if (val) {
            showToast(`Booking status "${val}" already exists.`, "warning");
        }
    } else if (type === 'channels') {
        const nameField = document.getElementById("new-channel-name");
        const val = nameField.value.trim();
        if (val && !state.channels.includes(val)) {
            state.channels.push(val);
            nameField.value = "";
            showToast(`Booking channel "${val}" added.`, "success");
        } else if (val) {
            showToast(`Booking channel "${val}" already exists.`, "warning");
        }
    }
    saveToLocalStorage();
    renderSettingsView();
    renderAllViews();
}

function addServiceItem(event) {
    event.preventDefault();
    const nameField = document.getElementById("new-service-name");
    const durField = document.getElementById("new-service-duration");
    const priceField = document.getElementById("new-service-price");
    
    const name = nameField.value.trim();
    const duration = durField.value.trim();
    const price = parseFloat(priceField.value);
    
    if (name && duration && !isNaN(price)) {
        state.services.push({ name, duration, price });
        nameField.value = "";
        durField.value = "";
        priceField.value = "";
        showToast(`Service "${name}" added.`, "success");
    }
    
    saveToLocalStorage();
    renderSettingsView();
    renderAllViews();
}

function deleteConfigItem(type, index) {
    const item = state[type][index];
    const itemName = typeof item === 'object' ? item.name : item;
    
    if (confirm(`Remove "${itemName}"?`)) {
        state[type].splice(index, 1);
        saveToLocalStorage();
        showToast(`Removed "${itemName}".`, "warning");
        renderSettingsView();
        renderAllViews();
    }
}

function editPaymentItem(index) {
    state.editingPaymentStatusIndex = index;
    renderSettingsView();
}

function cancelPaymentEdit() {
    state.editingPaymentStatusIndex = -1;
    renderSettingsView();
}

function savePaymentItem(index) {
    const nameInput = document.getElementById(`edit-payment-name-${index}`);
    if (!nameInput) return;
    
    const newName = nameInput.value.trim();
    if (!newName) {
        showToast("Payment status cannot be empty.", "warning");
        return;
    }
    
    const exists = state.payments.some((p, idx) => {
        if (idx === index) return false;
        return p.toLowerCase() === newName.toLowerCase();
    });
    
    if (exists) {
        showToast(`Payment status "${newName}" already exists.`, "warning");
        return;
    }
    
    const oldName = state.payments[index];
    
    // Cascading updates
    if (oldName.toLowerCase() !== newName.toLowerCase()) {
        state.bookings.forEach(b => {
            if (b.payment && b.payment.toLowerCase() === oldName.toLowerCase()) {
                b.payment = newName;
            }
        });
    }
    
    state.payments[index] = newName;
    state.editingPaymentStatusIndex = -1;
    
    saveToLocalStorage();
    showToast(`Updated Payment Status to "${newName}".`, "success");
    renderSettingsView();
    renderAllViews();
}

function editClientStatusItem(index) {
    state.editingClientStatusIndex = index;
    renderSettingsView();
}

function cancelClientStatusEdit() {
    state.editingClientStatusIndex = -1;
    renderSettingsView();
}

function saveClientStatusItem(index) {
    const nameInput = document.getElementById(`edit-clientStatus-name-${index}`);
    if (!nameInput) return;
    
    const newName = nameInput.value.trim();
    if (!newName) {
        showToast("Client status cannot be empty.", "warning");
        return;
    }
    
    const exists = state.clientStatuses.some((c, idx) => {
        if (idx === index) return false;
        return c.toLowerCase() === newName.toLowerCase();
    });
    
    if (exists) {
        showToast(`Client status "${newName}" already exists.`, "warning");
        return;
    }
    
    const oldName = state.clientStatuses[index];
    
    // Cascading updates
    if (oldName.toLowerCase() !== newName.toLowerCase()) {
        state.bookings.forEach(b => {
            if (b.status && b.status.toLowerCase() === oldName.toLowerCase()) {
                b.status = newName;
            }
        });
    }
    
    state.clientStatuses[index] = newName;
    state.editingClientStatusIndex = -1;
    
    saveToLocalStorage();
    showToast(`Updated Client Status to "${newName}".`, "success");
    renderSettingsView();
    renderAllViews();
}

function editDiscountItem(index) {
    state.editingDiscountIndex = index;
    renderSettingsView();
}

function cancelDiscountEdit() {
    state.editingDiscountIndex = -1;
    renderSettingsView();
}

function saveDiscountItem(index) {
    const nameInput = document.getElementById(`edit-discount-name-${index}`);
    if (!nameInput) return;
    
    const newName = nameInput.value.trim();
    if (!newName) {
        showToast("Discount option cannot be empty.", "warning");
        return;
    }
    
    const exists = state.discounts.some((d, idx) => {
        if (idx === index) return false;
        return d.toLowerCase() === newName.toLowerCase();
    });
    
    if (exists) {
        showToast(`Discount option "${newName}" already exists.`, "warning");
        return;
    }
    
    const oldName = state.discounts[index];
    
    // Cascading updates
    if (oldName.toLowerCase() !== newName.toLowerCase()) {
        state.bookings.forEach(b => {
            if (b.discount && b.discount.toLowerCase() === oldName.toLowerCase()) {
                b.discount = newName;
            }
        });
    }
    
    state.discounts[index] = newName;
    state.editingDiscountIndex = -1;
    
    saveToLocalStorage();
    showToast(`Updated Discount Option to "${newName}".`, "success");
    renderSettingsView();
    renderAllViews();
}

function editBookingStatusItem(index) {
    state.editingBookingStatusIndex = index;
    renderSettingsView();
}

function cancelBookingStatusEdit() {
    state.editingBookingStatusIndex = -1;
    renderSettingsView();
}

function saveBookingStatusItem(index) {
    const nameInput = document.getElementById(`edit-bookingStatus-name-${index}`);
    if (!nameInput) return;
    
    const newName = nameInput.value.trim();
    if (!newName) {
        showToast("Booking Status cannot be empty.", "warning");
        return;
    }
    
    // Check duplicates, ignoring current index
    const exists = state.bookingStatuses.some((bs, idx) => {
        if (idx === index) return false;
        return bs.toLowerCase() === newName.toLowerCase();
    });
    
    if (exists) {
        showToast(`Booking Status "${newName}" already exists.`, "warning");
        return;
    }
    
    // Perform update
    const oldName = state.bookingStatuses[index];
    
    // Rename occurrences in active bookings
    if (oldName.toLowerCase() !== newName.toLowerCase()) {
        state.bookings.forEach(b => {
            if (b.bookingStatus && b.bookingStatus.toLowerCase() === oldName.toLowerCase()) {
                b.bookingStatus = newName;
            }
        });
    }
    
    state.bookingStatuses[index] = newName;
    state.editingBookingStatusIndex = -1;
    
    saveToLocalStorage();
    showToast(`Updated Booking Status to "${newName}".`, "success");
    renderSettingsView();
    renderAllViews();
}

function editRoomItem(index) {
    state.editingRoomIndex = index;
    renderSettingsView();
}

function cancelRoomEdit() {
    state.editingRoomIndex = -1;
    renderSettingsView();
}

function saveRoomItem(index) {
    const nameInput = document.getElementById(`edit-room-name-${index}`);
    const bedsInput = document.getElementById(`edit-room-beds-${index}`);
    const steamInput = document.getElementById(`edit-room-steam-${index}`);
    if (!nameInput || !bedsInput) return;
    
    const newName = nameInput.value.trim();
    const newBeds = parseInt(bedsInput.value) || 1;
    const hasSteam = steamInput ? steamInput.checked : false;
    
    if (!newName) {
        showToast("Room name cannot be empty.", "warning");
        return;
    }
    
    // Check duplicates, ignoring the current index
    const exists = state.rooms.some((r, idx) => {
        if (idx === index) return false;
        return r.name.toLowerCase() === newName.toLowerCase();
    });
    
    if (exists) {
        showToast(`Room "${newName}" already exists.`, "warning");
        return;
    }
    
    // Perform update
    const oldName = state.rooms[index].name;
    
    // If the room name changes, update all bookings and logs that reference this room
    if (oldName.toLowerCase() !== newName.toLowerCase()) {
        state.bookings.forEach(b => {
            if (b.room && b.room.toLowerCase() === oldName.toLowerCase()) {
                b.room = newName;
            }
        });
    }
    
    state.rooms[index] = { name: newName, beds: newBeds, hasSteam: hasSteam, isBlocked: state.rooms[index].isBlocked || false };
    state.editingRoomIndex = -1;
    
    saveToLocalStorage();
    showToast(`Updated room "${newName}".`, "success");
    renderSettingsView();
    renderAllViews();
}

function editStaffItem(index) {
    state.editingStaffIndex = index;
    renderSettingsView();
}

function cancelStaffEdit() {
    state.editingStaffIndex = -1;
    renderSettingsView();
}

function saveStaffItem(index) {
    const nameInput = document.getElementById(`edit-staff-name-${index}`);
    const dateInput = document.getElementById(`edit-staff-date-${index}`);
    if (!nameInput || !dateInput) return;
    
    const newName = nameInput.value.trim();
    const newDate = dateInput.value;
    
    if (!newName) {
        showToast("Therapist name cannot be empty.", "warning");
        return;
    }
    
    // Check duplicates, ignoring the current index
    const exists = state.staff.some((s, idx) => {
        if (idx === index) return false;
        const name = typeof s === 'string' ? s : s.name;
        return name.toLowerCase() === newName.toLowerCase();
    });
    
    if (exists) {
        showToast(`Therapist "${newName}" already exists.`, "warning");
        return;
    }
    
    // Perform update
    const oldName = typeof state.staff[index] === 'string' ? state.staff[index] : state.staff[index].name;
    
    // If the therapist name changes, update all bookings and logs that reference this therapist
    if (oldName.toLowerCase() !== newName.toLowerCase()) {
        state.bookings.forEach(b => {
            if (b.staff && b.staff.toLowerCase() === oldName.toLowerCase()) {
                b.staff = newName;
            }
        });
    }
    
    state.staff[index] = { 
        name: newName, 
        startDate: newDate, 
        isOffDuty: (typeof state.staff[index] === 'object' && state.staff[index].isOffDuty) || false 
    };
    state.editingStaffIndex = -1;
    
    saveToLocalStorage();
    showToast(`Updated therapist "${newName}".`, "success");
    renderSettingsView();
    renderAllViews();
}

function editChannelItem(index) {
    state.editingChannelIndex = index;
    renderSettingsView();
}

function cancelChannelEdit() {
    state.editingChannelIndex = -1;
    renderSettingsView();
}

function saveChannelItem(index) {
    const nameInput = document.getElementById(`edit-channel-name-${index}`);
    if (!nameInput) return;
    
    const newName = nameInput.value.trim();
    if (!newName) {
        showToast("Booking channel cannot be empty.", "warning");
        return;
    }
    
    const exists = state.channels.some((c, idx) => {
        if (idx === index) return false;
        return c.toLowerCase() === newName.toLowerCase();
    });
    
    if (exists) {
        showToast(`Booking channel "${newName}" already exists.`, "warning");
        return;
    }
    
    const oldName = state.channels[index];
    
    // Rename occurrences in active bookings
    if (oldName.toLowerCase() !== newName.toLowerCase()) {
        state.bookings.forEach(b => {
            if (b.channel && b.channel.toLowerCase() === oldName.toLowerCase()) {
                b.channel = newName;
            }
        });
    }
    
    state.channels[index] = newName;
    state.editingChannelIndex = -1;
    
    saveToLocalStorage();
    showToast(`Updated Booking Channel to "${newName}".`, "success");
    renderSettingsView();
    renderAllViews();
}

function loadDemoDataset() {
    state.rooms = [
        { name: "11", beds: 2, hasSteam: true, isBlocked: false },
        { name: "12", beds: 2, hasSteam: true, isBlocked: false },
        { name: "13", beds: 2, hasSteam: true, isBlocked: false },
        { name: "15", beds: 1, hasSteam: false, isBlocked: false },
        { name: "22", beds: 1, hasSteam: false, isBlocked: false },
        { name: "26", beds: 1, hasSteam: false, isBlocked: false },
        { name: "foot", beds: 5, hasSteam: false, isBlocked: false }
    ];
    state.staff = [
        { name: "ចាន់ធូ", startDate: "2026-06-13", isOffDuty: false },
        { name: "ពិសិដ្ឋ", startDate: "2026-06-13", isOffDuty: false },
        { name: "ស្រីនាថ", startDate: "2026-06-13", isOffDuty: false },
        { name: "ម៉ាណែត", startDate: "2026-06-13", isOffDuty: false },
        { name: "ស្រីនី", startDate: "2026-06-13", isOffDuty: false },
        { name: "លីដា", startDate: "2026-06-13", isOffDuty: false },
        { name: "ណា", startDate: "2026-06-13", isOffDuty: false }
    ];
    state.services = getAuraSpaServices();
    state.bookings = getDemoBookings();
    saveToLocalStorage();
    showToast("Sample spreadsheet data restored.", "success");
    renderAllViews();
}

function resetSystemDatabase() {
    if (confirm("DANGER: This will delete ALL bookings and configurations. Proceed?")) {
        state.bookings = [];
        state.rooms = [];
        state.staff = [];
        state.services = [];
        state.payments = ["already pay", "yes", "unpaid"];
        state.clientStatuses = ["old", "new"];
        state.discounts = ["0%", "10%", "20%", "30%", "40%"];
        state.bookingStatuses = ["Booked", "Confirm", "Cancel", "Not Male Therapist", "Not Enough Female Therapist", "Booking therapist is not available during booking time", "Therapist is not on duty"];
        state.channels = ["walk in", "call in", "Facebook page", "Telegram"];
        state.editingStaffIndex = -1;
        state.editingRoomIndex = -1;
        state.editingBookingStatusIndex = -1;
        state.editingPaymentStatusIndex = -1;
        state.editingClientStatusIndex = -1;
        state.editingDiscountIndex = -1;
        state.editingChannelIndex = -1;
        state.columnOrder = [0, 2, 3, 4, 5, 6, 7, 8, 20, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        saveToLocalStorage();
        showToast("Database cleared completely.", "error");
        renderAllViews();
    }
}

// --- CSV Import / Export Modules ---
function exportToCSV() {
    if (state.bookings.length === 0) {
        showToast("No bookings to export.", "warning");
        return;
    }
    
    // Column Headers matching TABLE_COLUMNS
    const defaultHeaders = [
        "កាលបរិច្ឆេទ (Date)", "ថ្ងៃកក់ (Book Date)", "ឈ្មោះ (Name)", "លេខទូរស័ព្ទ (Phone)", "តាមរយៈ (Via)", "សញ្ជាតិភ្ញៀវ (Nation)", 
        "ប្រភេទភ្ញៀវ (Guest)", "ភេទ (Sex)", "ប្រភេទសេវាកម្ម (Service)", "កក់បុគ្គលិក (Req Staff)", "បុគ្គលិកផ្តល់សេវាកម្ម (Staff)", 
        "លេខបន្ទប់ (Room)", "រយៈពេល (Dur)", "ម៉ោងចូល (In)", "ម៉ោងចេញ (Out)", "ការរៀបចំបន្ទប់ (Prep)", "Payment", 
        "Discount", "Status", "ស្ថានភាពកក់ (Booking Status)", "តម្លៃ (Price)"
    ];
    
    const headers = state.columnOrder.map(idx => defaultHeaders[idx]);
    
    let csvContent = "\ufeff"; // Add BOM UTF-8 for Excel Khmer support!
    csvContent += headers.join(",") + "\n";
    
    state.bookings.forEach(b => {
        const rowData = [
            formatDateToDDMMYY(b.date),
            formatDateToDDMMYY(b.bookingDate),
            b.clientName,
            b.phone || "",
            b.channel,
            b.nationality,
            b.guestType,
            b.gender,
            b.serviceType,
            b.bookedStaff || "",
            b.staff,
            b.room,
            b.duration,
            b.timeIn,
            b.timeOut,
            b.roomPrep || "",
            b.payment,
            b.discount,
            b.status,
            b.bookingStatus || "Confirm",
            getBookingNetPrice(b)
        ];
        
        const row = state.columnOrder.map(idx => rowData[idx]).map(val => {
            // Escape double quotes and wrap in quotes if containing comma
            let text = String(val).replace(/"/g, '""');
            return text.includes(",") || text.includes("\n") || text.includes('"') ? `"${text}"` : text;
        });
        csvContent += row.join(",") + "\n";
    });
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `spa_bookings_${getTodayISOString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Spreadsheet CSV exported successfully!", "success");
}

function importFromCSV(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        const rows = parseCSVText(text);
        
        if (rows.length < 2) {
            showToast("Invalid CSV file structure.", "error");
            return;
        }
        
        const headers = rows[0].map(h => h.trim().toLowerCase());
        
        // Header translations mappings
        const mapping = {
            "date": ["date", "កាលបរិច្ឆេទ"],
            "bookingdate": ["ថ្ងៃកក់", "booking date", "bookingdate"],
            "clientname": ["ឈ្មោះ", "name", "client name", "clientname"],
            "phone": ["លេខទូរស័ព្ទ", "phone", "phone number", "phone_number"],
            "channel": ["តាមរយៈ", "via", "channel"],
            "nationality": ["សញ្ជាតិភ្ញៀវ", "nation", "nationality", "guest nationality"],
            "guesttype": ["ប្រភេទភ្ញៀវ", "guest", "guest type", "guest_type"],
            "gender": ["ភេទ", "gender", "sex"],
            "servicetype": ["ប្រភេទសេវាកម្ម", "service", "service type", "service_type"],
            "bookedstaff": ["កក់បុគ្គលិក", "req staff", "booked staff", "booked_staff"],
            "staff": ["បុគ្គលិកផ្តល់សេវាកម្ម", "staff", "service provider", "provider"],
            "room": ["លេខបន្ទប់", "room", "room number", "room_number"],
            "duration": ["រយៈពេល", "duration", "dur"],
            "timein": ["ម៉ោងចូល", "time in", "time_in", "in"],
            "timeout": ["ម៉ោងចេញ", "time out", "time_out", "out"],
            "roomprep": ["ការរៀបចំបន្ទប់", "prep", "room prep", "room setup"],
            "payment": ["payment", "ទូទាត់"],
            "discount": ["discount", "បញ្ចុះតម្លៃ"],
            "status": ["status", "ស្ថានភាព"]
        };
        
        // Find indices in CSV
        const colIndices = {};
        Object.entries(mapping).forEach(([field, aliases]) => {
            colIndices[field] = headers.findIndex(h => aliases.some(alias => h.includes(alias.toLowerCase())));
        });
        
        let importedCount = 0;
        const newBookings = [];
        
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            if (row.length < 5) continue; // skip empty rows
            
            // Helper getter
            const getVal = (field, fallback = "") => {
                const idx = colIndices[field];
                return (idx !== -1 && row[idx]) ? row[idx].trim() : fallback;
            };
            
            // Reconstruct time Out if missing
            const timeIn = getVal("timein");
            const duration = getVal("duration", "1:30");
            let timeOut = getVal("timeout");
            if (!timeOut && timeIn) {
                timeOut = calculateTimeOut(timeIn, duration);
            }
            
            const booking = {
                id: String(Date.now() + i),
                date: convertDateToISO(getVal("date")),
                dateLabel: getVal("date"),
                bookingDate: convertDateToISO(getVal("bookingdate")),
                clientName: getVal("clientname", "walk in"),
                phone: getVal("phone"),
                channel: getVal("channel", "walk in"),
                nationality: getVal("nationality", "ខ្មែរ"),
                guestType: getVal("guesttype", "Normal"),
                gender: getVal("gender", "F"),
                serviceType: getVal("servicetype", "Herbal oil massage"),
                bookedStaff: getVal("bookedstaff"),
                staff: getVal("staff", "ចាន់ធូ"),
                room: getVal("room", "11"),
                duration: duration,
                timeIn: timeIn || "12:00",
                timeOut: timeOut || "13:30",
                roomPrep: getVal("roomprep", "ការរៀបចំបន្ទប់"),
                payment: getVal("payment", "already pay"),
                discount: getVal("discount", "0%"),
                status: getVal("status", "old")
            };
            
            // Collect config items to populate settings automatically
            if (booking.room) {
                const roomExists = state.rooms.some(r => r.name === booking.room);
                if (!roomExists) {
                    state.rooms.push({ name: booking.room, beds: 1, hasSteam: false, isBlocked: false });
                }
            }
            if (booking.staff) {
                const staffExists = state.staff.some(s => {
                    const name = typeof s === 'string' ? s : s.name;
                    return name.toLowerCase() === booking.staff.toLowerCase();
                });
                if (!staffExists) {
                    state.staff.push({ name: booking.staff, startDate: getTodayISOString(), isOffDuty: false });
                }
            }
            if (booking.payment && !state.payments.includes(booking.payment)) state.payments.push(booking.payment);
            if (booking.status && !state.clientStatuses.includes(booking.status)) state.clientStatuses.push(booking.status);
            if (booking.discount && !state.discounts.includes(booking.discount)) state.discounts.push(booking.discount);
            if (booking.bookingStatus && !state.bookingStatuses.includes(booking.bookingStatus)) state.bookingStatuses.push(booking.bookingStatus);
            
            newBookings.push(booking);
            importedCount++;
        }
        
        if (newBookings.length > 0) {
            state.bookings = [...state.bookings, ...newBookings];
            saveToLocalStorage();
            showToast(`Imported ${importedCount} bookings successfully!`, "success");
            renderAllViews();
        } else {
            showToast("No records imported. Check CSV format.", "error");
        }
    };
    reader.readAsText(file);
}

// Clean date parser converting "12-Jun" to "2026-06-12"
function convertDateToISO(dateStr) {
    if (!dateStr) return getTodayISOString();
    dateStr = dateStr.trim();
    
    // If already ISO YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
    
    // Support DD/MM/YY or DD/MM/YYYY format
    if (dateStr.includes("/")) {
        const parts = dateStr.split("/");
        if (parts.length === 3) {
            const day = String(parseInt(parts[0])).padStart(2, '0');
            const month = String(parseInt(parts[1])).padStart(2, '0');
            let year = parts[2].trim();
            if (year.length === 2) {
                year = "20" + year;
            }
            return `${year}-${month}-${day}`;
        }
    }
    
    // Parse "12-Jun" or "12-Jun-26"
    const parts = dateStr.split("-");
    if (parts.length >= 2) {
        const day = parseInt(parts[0]);
        const monthStr = parts[1].toLowerCase();
        
        const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        const monthIdx = months.findIndex(m => monthStr.includes(m));
        
        if (day && monthIdx !== -1) {
            let year = parts[2] ? parts[2].trim() : new Date().getFullYear().toString();
            if (year.length === 2) {
                year = "20" + year;
            }
            return `${year}-${String(monthIdx + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }
    }
    return getTodayISOString();
}

// Custom CSV Parser supporting quotes and escaping
function parseCSVText(text) {
    const lines = [];
    let row = [""];
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        const next = text[i + 1];

        if (c === '"') {
            if (inQuotes && next === '"') {
                row[row.length - 1] += '"'; // escaped quote
                i++;
            } else {
                inQuotes = !inQuotes; // toggle quote block
            }
        } else if (c === ',' && !inQuotes) {
            row.push("");
        } else if ((c === '\r' || c === '\n') && !inQuotes) {
            if (c === '\r' && next === '\n') {
                i++; // skip \n
            }
            lines.push(row);
            row = [""];
        } else {
            row[row.length - 1] += c;
        }
    }
    if (row.length > 1 || row[0] !== "") {
        lines.push(row);
    }
    return lines;
}

// --- Toast Alerts Panel ---
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-msg">${message}</div>
    `;
    container.appendChild(toast);
    
    // Slide off & remove after 3.5s
    setTimeout(() => {
        toast.classList.add("fade-out");
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 3500);
}

// --- Quick Add helpers from Booking Form ---
function quickAdd(type) {
    const promptMsg = type === 'rooms' ? 
        (state.currentLang === 'en' ? "Enter new Room name/number:" : "បញ្ចូលឈ្មោះ ឬលេខបន្ទប់ថ្មី:") :
        (state.currentLang === 'en' ? "Enter new Therapist name:" : "បញ្ចូលឈ្មោះបុគ្គលិកម៉ាស្សាថ្មី:");
        
    const newVal = prompt(promptMsg);
    if (newVal && newVal.trim()) {
        const val = newVal.trim();
        if (type === 'rooms') {
            const exists = state.rooms.some(r => r.name.toLowerCase() === val.toLowerCase());
            if (!exists) {
                const bedsPromptMsg = state.currentLang === 'en' ? 
                    "Enter number of beds (default is 1):" : 
                    "បញ្ចូលចំនួនគ្រែ (លំនាំដើមគឺ ១):";
                const bedsInput = prompt(bedsPromptMsg, "1");
                const bedsVal = parseInt(bedsInput) || 1;
                
                const steamPromptMsg = state.currentLang === 'en' ? 
                    "Does this room have a steam room?" : 
                    "តើបន្ទប់នេះមានបន្ទប់ស្ទីមដែរឬទេ?";
                const hasSteam = confirm(steamPromptMsg);
                
                state.rooms.push({ name: val, beds: bedsVal, hasSteam: hasSteam, isBlocked: false });
                saveToLocalStorage();
                renderAllViews();
                document.getElementById("book-room").value = val;
                const steamText = hasSteam ? (state.currentLang === 'en' ? 'with Steam' : 'មានស្ទីម') : (state.currentLang === 'en' ? 'no Steam' : 'គ្មានស្ទីម');
                showToast(`Room ${val} (${bedsVal} beds, ${steamText}) added successfully!`, "success");
            } else {
                showToast(`Room ${val} already exists.`, "warning");
            }
        } else if (type === 'staff') {
            const staffExists = state.staff.some(s => {
                const name = typeof s === 'string' ? s : s.name;
                return name.toLowerCase() === val.toLowerCase();
            });
            if (!staffExists) {
                state.staff.push({ name: val, startDate: getTodayISOString(), isOffDuty: false });
                saveToLocalStorage();
                renderAllViews();
                document.getElementById("book-staff").value = val;
                showToast(`Therapist ${val} added successfully!`, "success");
            } else {
                showToast(`Therapist ${val} already exists.`, "warning");
            }
        }
    }
}

function toggleRoomBlock(roomName, statusValue) {
    const isBlocked = statusValue === "block";
    const room = state.rooms.find(r => r.name === roomName);
    if (room) {
        room.isBlocked = isBlocked;
        saveToLocalStorage();
        renderAllViews();
        showToast(
            isBlocked ? `Room ${roomName} blocked for maintenance` : `Room ${roomName} unblocked`,
            isBlocked ? "warning" : "success"
        );
    }
}

function toggleTherapistDuty(staffName, statusValue) {
    const isOffDuty = statusValue === "off";
    const staff = state.staff.find(s => s.name === staffName);
    if (staff) {
        staff.isOffDuty = isOffDuty;
        saveToLocalStorage();
        renderAllViews();
        
        const lang = state.currentLang;
        const msg = isOffDuty ? 
            (lang === 'en' ? `Therapist ${staffName} is set to Off Duty` : `បុគ្គលិក ${staffName} ត្រូវបានកំណត់ថាគ្មានវេនការងារ`) :
            (lang === 'en' ? `Therapist ${staffName} is set to On Duty` : `បុគ្គលិក ${staffName} ត្រូវបានកំណត់ថាមានវេនការងារ`);
        
        showToast(msg, isOffDuty ? "warning" : "success");
    }
}

// --- Theme (Day / Night Mode) Toggles ---
function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", state.theme);
    localStorage.setItem("spa_theme", state.theme);
    updateThemeIcons();
    showToast(`Switched to ${state.theme === 'dark' ? 'Night' : 'Day'} Mode`, "info");
}

function updateThemeIcons() {
    const sunIcon = document.getElementById("theme-icon-sun");
    const moonIcon = document.getElementById("theme-icon-moon");
    if (sunIcon && moonIcon) {
        if (state.theme === "light") {
            sunIcon.style.display = "block";
            moonIcon.style.display = "none";
        } else {
            sunIcon.style.display = "none";
            moonIcon.style.display = "block";
        }
    }
}

// --- Dynamic Schedule Hint Visualizers for Form Inputs ---
function updateTherapistScheduleHint() {
    const isBlocked = document.getElementById("book-is-block").checked;
    const staff = document.getElementById("book-staff").value;
    const date = document.getElementById("book-date").value;
    const hintDiv = document.getElementById("therapist-schedule-hint");
    const bookingId = document.getElementById("booking-id").value;
    
    if (isBlocked || !staff || !date) {
        hintDiv.style.display = "none";
        return;
    }
    
    // Find all bookings for this therapist on the selected date (excluding current booking)
    const staffBookings = state.bookings.filter(b => b.staff === staff && b.date === date && b.id !== bookingId);
    
    // Sort bookings chronologically by Time In
    staffBookings.sort((a, b) => timeToMinutes(a.timeIn) - timeToMinutes(b.timeIn));
    
    if (staffBookings.length === 0) {
        hintDiv.innerHTML = `<span style="color: var(--color-success); font-weight: 600;">✓ ${state.currentLang === 'en' ? 'Available all day' : 'ទំនេរពេញមួយថ្ងៃ'}</span>`;
    } else {
        const listItems = staffBookings.map(b => `${b.timeIn} - ${b.timeOut} (${b.clientName})`).join(", ");
        hintDiv.innerHTML = `<span style="color: var(--color-warning); font-weight: 600;">⚠️ ${state.currentLang === 'en' ? 'Busy times' : 'ម៉ោងមមាញឹក'}:</span> ${listItems}`;
    }
    hintDiv.style.display = "block";
}

function updateRoomScheduleHint() {
    const room = document.getElementById("book-room").value;
    const date = document.getElementById("book-date").value;
    const hintDiv = document.getElementById("room-schedule-hint");
    const bookingId = document.getElementById("booking-id").value;
    
    if (!room || !date) {
        hintDiv.style.display = "none";
        return;
    }
    
    // Find all bookings for this room on the selected date (excluding current booking)
    const roomBookings = state.bookings.filter(b => b.room === room && b.date === date && b.id !== bookingId);
    
    // Sort bookings chronologically by Time In
    roomBookings.sort((a, b) => timeToMinutes(a.timeIn) - timeToMinutes(b.timeIn));
    
    if (roomBookings.length === 0) {
        hintDiv.innerHTML = `<span style="color: var(--color-success); font-weight: 600;">✓ ${state.currentLang === 'en' ? 'Available all day' : 'ទំនេរពេញមួយថ្ងៃ'}</span>`;
    } else {
        const listItems = roomBookings.map(b => {
            if (b.isBlock) {
                return `${b.timeIn} - ${b.timeOut} (🚫 ${state.currentLang === 'en' ? 'Blocked' : 'បិទ'}: ${b.clientName})`;
            }
            return `${b.timeIn} - ${b.timeOut} (${b.clientName})`;
        }).join(", ");
        hintDiv.innerHTML = `<span style="color: var(--color-warning); font-weight: 600;">⚠️ ${state.currentLang === 'en' ? 'Occupied times' : 'ម៉ោងមិនទំនេរ'}:</span> ${listItems}`;
    }
    hintDiv.style.display = "block";
}

// --- Brand & Logo Customization Functions ---
function updateSidebarLogo() {
    const container = document.getElementById("brand-logo-container");
    if (!container) return;
    
    if (state.customLogo) {
        container.innerHTML = `<img src="${state.customLogo}" alt="Logo">`;
    } else {
        container.innerHTML = `<span class="brand-logo-text">Logo</span>`;
    }
}

function triggerLogoUpload() {
    const fileInput = document.getElementById("sidebar-logo-input");
    if (fileInput) fileInput.click();
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Check file size (max 2MB to keep localStorage happy)
    if (file.size > 2 * 1024 * 1024) {
        showToast(state.currentLang === 'en' ? "Logo file must be under 2MB." : "ឡូហ្គោត្រូវតែមានទំហំក្រោម 2MB។", "warning");
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        state.customLogo = e.target.result;
        saveToLocalStorage();
        updateSidebarLogo();
        renderLogoPreview();
        showToast(state.currentLang === 'en' ? "Custom logo updated successfully." : "ឡូហ្គោត្រូវបានកែប្រែដោយជោគជ័យ។", "success");
    };
    reader.readAsDataURL(file);
}

function renderLogoPreview() {
    const previewBox = document.getElementById("brand-logo-preview-box");
    const resetBtn = document.getElementById("btn-reset-logo");
    if (!previewBox) return;
    
    // Style as a circle matching the redesigned sidebar logo circle
    previewBox.style.borderRadius = "50%";
    previewBox.style.width = "80px";
    previewBox.style.height = "80px";
    previewBox.style.border = "2px solid #ffffff";
    previewBox.style.backgroundColor = "#ffffff";
    previewBox.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
    
    if (state.customLogo) {
        previewBox.innerHTML = `<img src="${state.customLogo}" alt="Logo Preview" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
        if (resetBtn) resetBtn.style.display = "inline-block";
    } else {
        previewBox.innerHTML = `<span style="font-size: 0.95rem; font-weight: 700; color: #9ca3af; user-select: none;">Logo</span>`;
        if (resetBtn) resetBtn.style.display = "none";
    }
}

function resetToDefaultLogo() {
    state.customLogo = "";
    saveToLocalStorage();
    updateSidebarLogo();
    renderLogoPreview();
    showToast(state.currentLang === 'en' ? "Logo reset to default." : "ឡូហ្គោត្រូវបានកំណត់មកលំនាំដើមវិញ។", "success");
}

// --- Table Title and Column Resizing Helpers ---
function updateTableTitleDisplay() {
    const titleEl = document.getElementById("grid-table-title");
    if (!titleEl) return;
    if (titleEl.querySelector("input")) return; // skip if currently editing
    
    titleEl.textContent = state.tableTitle || I18N[state.currentLang].title_grid;
}

function editTableTitle() {
    const titleEl = document.getElementById("grid-table-title");
    if (!titleEl) return;
    if (titleEl.querySelector("input")) return;
    
    const currentTitle = titleEl.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentTitle;
    input.className = "input-field";
    input.style.fontSize = "1.4rem";
    input.style.fontWeight = "700";
    input.style.height = "auto";
    input.style.padding = "4px 8px";
    input.style.width = "350px";
    input.style.display = "inline-block";
    
    titleEl.innerHTML = "";
    titleEl.appendChild(input);
    input.focus();
    input.select();
    
    let isSaved = false;
    const saveTitle = () => {
        if (isSaved) return;
        isSaved = true;
        let newTitle = input.value.trim();
        if (!newTitle) newTitle = currentTitle;
        state.tableTitle = newTitle;
        saveToLocalStorage();
        titleEl.textContent = newTitle;
    };
    
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            saveTitle();
        } else if (e.key === "Escape") {
            isSaved = true;
            titleEl.textContent = currentTitle;
        }
    });
    
    input.addEventListener("blur", () => {
        saveTitle();
    });
}

function startColumnHeaderEdit(th, colIndex) {
    if (th.querySelector("input")) return; // already editing
    
    const col = TABLE_COLUMNS[colIndex];
    const currentLabel = state.customColumnLabels[col.field] || col.label;
    
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentLabel;
    input.className = "input-field";
    input.style.fontSize = "0.85rem";
    input.style.padding = "2px 4px";
    input.style.width = "80%";
    input.style.display = "inline-block";
    
    th.innerHTML = "";
    th.appendChild(input);
    input.focus();
    input.select();
    
    th.draggable = false;
    
    let isSaved = false;
    const saveLabel = () => {
        if (isSaved) return;
        isSaved = true;
        
        let newLabel = input.value.trim();
        if (newLabel) {
            state.customColumnLabels[col.field] = newLabel;
        } else {
            delete state.customColumnLabels[col.field];
        }
        saveToLocalStorage();
        renderGridView();
    };
    
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            saveLabel();
        } else if (event.key === "Escape") {
            isSaved = true;
            renderGridView();
        }
    });
    
    input.addEventListener("blur", () => {
        saveLabel();
    });
}

function editColumnHeader(e, colIndex) {
    e.preventDefault();
    e.stopPropagation();
    startColumnHeaderEdit(e.currentTarget, colIndex);
}

function editColumnHeaderBtn(e, colIndex) {
    e.preventDefault();
    e.stopPropagation();
    const th = e.currentTarget.closest("th");
    if (th) {
        startColumnHeaderEdit(th, colIndex);
    }
}

function initColumnResizers() {
    const table = document.getElementById("booking-table");
    if (!table) return;
    const headers = table.querySelectorAll("th.draggable-header");
    
    headers.forEach(th => {
        const resizer = th.querySelector(".th-resizer");
        if (!resizer) return;
        
        resizer.addEventListener("mouseenter", () => {
            th.draggable = false;
        });
        resizer.addEventListener("mouseleave", () => {
            if (!resizer.classList.contains("resizing")) {
                th.draggable = true;
            }
        });
        
        resizer.addEventListener("mousedown", (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            resizer.classList.add("resizing");
            th.draggable = false;
            
            const startX = e.clientX;
            const startWidth = th.offsetWidth;
            const field = th.getAttribute("data-field");
            
            const mouseMoveHandler = (moveEvent) => {
                const deltaX = moveEvent.clientX - startX;
                const newWidth = Math.max(50, startWidth + deltaX);
                
                th.style.width = `${newWidth}px`;
                th.style.minWidth = `${newWidth}px`;
                th.style.maxWidth = `${newWidth}px`;
                
                state.columnWidths[field] = newWidth;
            };
            
            const mouseUpHandler = () => {
                resizer.classList.remove("resizing");
                th.draggable = true;
                
                document.removeEventListener("mousemove", mouseMoveHandler);
                document.removeEventListener("mouseup", mouseUpHandler);
                
                saveToLocalStorage();
            };
            
            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
        });
    });
}

// --- Reports Section Controllers & Calculations ---

function initReportsDateInputs() {
    const startInput = document.getElementById("report-start-date");
    const endInput = document.getElementById("report-end-date");
    if (startInput && endInput) {
        if (!startInput.value || !endInput.value) {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            startInput.value = `${year}-${month}-01`;
            endInput.value = now.toISOString().split('T')[0];
        }
    }
}

function renderReportsView() {
    initReportsDateInputs();
    
    // If a report was already generated, re-render it to support language switches
    if (state.lastGeneratedReport) {
        const reportTypeSelect = document.getElementById("report-type");
        const startInput = document.getElementById("report-start-date");
        const endInput = document.getElementById("report-end-date");
        
        if (reportTypeSelect && startInput && endInput) {
            reportTypeSelect.value = state.lastGeneratedReport;
            const startDate = startInput.value;
            const endDate = endInput.value;
            if (startDate && endDate) {
                generateReport(state.lastGeneratedReport, startDate, endDate, true);
            }
        }
    }
}

function triggerReportGeneration() {
    const reportTypeSelect = document.getElementById("report-type");
    const startInput = document.getElementById("report-start-date");
    const endInput = document.getElementById("report-end-date");
    
    if (!reportTypeSelect || !startInput || !endInput) return;
    
    const reportType = reportTypeSelect.value;
    const startDate = startInput.value;
    const endDate = endInput.value;
    
    const lang = state.currentLang;
    
    if (!reportType) {
        showToast(I18N[lang].report_validation_alert, "warning");
        return;
    }
    
    if (!startDate || !endDate) {
        showToast(lang === 'en' ? "Please select both start and end dates." : "សូមជ្រើសរើសថ្ងៃចាប់ផ្តើម និងថ្ងៃបញ្ចប់។", "warning");
        return;
    }
    
    const reportOptionText = reportTypeSelect.options[reportTypeSelect.selectedIndex].text;
    const confirmMsg = I18N[lang].report_confirm_prompt
        .replace("{report}", `"${reportOptionText}"`)
        .replace("{start}", startDate)
        .replace("{end}", endDate);
        
    if (confirm(confirmMsg)) {
        state.lastGeneratedReport = reportType;
        generateReport(reportType, startDate, endDate, false);
    }
}

function isUnavailabilityStatus(status) {
    if (!status) return false;
    const s = status.toLowerCase().trim();
    return s === 'not male therapist' || 
           s === 'not enough female therapist' || 
           s === 'therapist is not on duty' || 
           s === 'not available' || 
           s.includes('not available') || 
           s.includes('unavailable');
}

function isCancellationStatus(status) {
    if (!status) return false;
    return status.toLowerCase().trim() === 'cancel';
}

function getBookingNetPrice(b) {
    const serviceMatch = state.services.find(s => s.name === b.serviceType);
    let price = serviceMatch ? parseFloat(serviceMatch.price) : 0;
    if (isNaN(price)) price = 0;
    
    if (b.discount) {
        let pct = 0;
        if (typeof b.discount === 'string' && b.discount.includes("%")) {
            pct = parseFloat(b.discount.replace("%", "")) / 100;
        } else if (!isNaN(parseFloat(b.discount))) {
            pct = parseFloat(b.discount) / 100;
        }
        if (!isNaN(pct) && pct >= 0 && pct <= 1) {
            price = price * (1 - pct);
        }
    }
    return price;
}

function getBookingBasePrice(b) {
    const serviceMatch = state.services.find(s => s.name === b.serviceType);
    let price = serviceMatch ? parseFloat(serviceMatch.price) : 0;
    return isNaN(price) ? 0 : price;
}

function formatDuration(minutesStr) {
    const totalMin = parseInt(minutesStr);
    if (isNaN(totalMin) || totalMin <= 0) return "0m";
    const hrs = Math.floor(totalMin / 60);
    const mins = totalMin % 60;
    if (hrs > 0) {
        return mins > 0 ? `${hrs}h ${mins}m` : `${hrs}h`;
    }
    return `${mins}m`;
}

function generateReport(reportType, startDate, endDate, skipToast = false) {
    const container = document.getElementById("report-results-container");
    if (!container) return;
    
    const lang = state.currentLang;
    
    // Filter bookings by date
    const filteredBookings = state.bookings.filter(b => {
        if (!b.date) return false;
        return b.date >= startDate && b.date <= endDate;
    });
    
    if (!skipToast) {
        showToast(lang === 'en' ? "Report generated successfully!" : "របាយការណ៍ត្រូវបានបង្កើតដោយជោគជ័យ!", "success");
    }
    
    // Render specific report
    switch (reportType) {
        case "revenue":
            renderRevenueReport(container, filteredBookings);
            break;
        case "therapist":
            renderTherapistReport(container, filteredBookings);
            break;
        case "room":
            renderRoomReport(container, filteredBookings, startDate, endDate);
            break;
        case "demographics":
            renderDemographicsReport(container, filteredBookings);
            break;
        case "cancellation":
            renderCancellationReport(container, filteredBookings);
            break;
        case "unavailability":
            renderUnavailabilityReport(container, filteredBookings);
            break;
        default:
            container.innerHTML = `<p style="padding:24px; color:var(--color-danger);">Unknown report type.</p>`;
    }
}

// 1. Revenue Report
function renderRevenueReport(container, bookings) {
    const lang = state.currentLang;
    const t = I18N[lang];
    
    // Filter out cancels & unavailable
    const validBookings = bookings.filter(b => !isCancellationStatus(b.bookingStatus) && !isUnavailabilityStatus(b.bookingStatus));
    
    let totalRevenue = 0;
    validBookings.forEach(b => {
        totalRevenue += getBookingNetPrice(b);
    });
    
    const avgRevenue = validBookings.length > 0 ? (totalRevenue / validBookings.length) : 0;
    
    // Break down by payment status
    const paymentBreakdown = {};
    validBookings.forEach(b => {
        const pay = b.payment || "unpaid";
        paymentBreakdown[pay] = (paymentBreakdown[pay] || 0) + getBookingNetPrice(b);
    });
    
    let html = `
        <div class="report-summary-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div class="stat-card" style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">${t.report_total_bookings}</div>
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--brand-rust);">${validBookings.length}</div>
            </div>
            <div class="stat-card" style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">${t.report_total_revenue}</div>
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-success);">$${totalRevenue.toFixed(2)}</div>
            </div>
            <div class="stat-card" style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">${t.report_avg_revenue}</div>
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-info);">$${avgRevenue.toFixed(2)}</div>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 24px;">
            <div class="card-panel" style="padding: 20px; background-color: var(--bg-secondary); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color);">
                <h4 style="font-weight: 600; margin-bottom: 12px; color: var(--text-primary);">${lang === 'en' ? 'Revenue by Payment Status' : 'ចំណូលតាមស្ថានភាពទូទាត់'}</h4>
                <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                    ${Object.entries(paymentBreakdown).map(([status, val]) => {
                        const pct = totalRevenue > 0 ? ((val / totalRevenue) * 100).toFixed(1) : 0;
                        return `
                            <div style="flex: 1; min-width: 150px; background-color: var(--bg-tertiary); padding: 12px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">${status}</div>
                                <div style="font-size: 1.25rem; font-weight: 600; color: var(--text-primary); margin: 4px 0;">$${val.toFixed(2)}</div>
                                <div style="font-size: 0.75rem; color: var(--color-success); font-weight: 500;">${pct}%</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
        
        <div class="table-container" style="border: 1px solid var(--border-color); border-radius: var(--border-radius-md); overflow-x: auto;">
            <table class="spa-table">
                <thead>
                    <tr>
                        <th style="text-align: left;">${t.report_col_date}</th>
                        <th style="text-align: left;">${t.report_col_client}</th>
                        <th style="text-align: left;">${t.report_col_service}</th>
                        <th style="text-align: right;">${t.report_col_price}</th>
                        <th style="text-align: right;">${t.report_col_discount}</th>
                        <th style="text-align: center;">${t.report_col_payment}</th>
                        <th style="text-align: right;">${t.report_col_net}</th>
                    </tr>
                </thead>
                <tbody>
                    ${validBookings.map(b => {
                        const base = getBookingBasePrice(b);
                        const net = getBookingNetPrice(b);
                        const discount = b.discount || "0%";
                        return `
                            <tr>
                                <td>${b.date}</td>
                                <td>${b.clientName}</td>
                                <td>${b.serviceType}</td>
                                <td style="text-align: right;">$${base.toFixed(2)}</td>
                                <td style="text-align: right;">${discount}</td>
                                <td style="text-align: center;"><span class="badge ${b.payment === 'already pay' || b.payment === 'yes' ? 'badge-pay-yes' : 'badge-pay-unpaid'}">${b.payment || 'unpaid'}</span></td>
                                <td style="text-align: right; font-weight: 600; color: var(--color-success);">$${net.toFixed(2)}</td>
                            </tr>
                        `;
                    }).join('')}
                    ${validBookings.length === 0 ? `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 24px;">No data in this period</td></tr>` : ''}
                </tbody>
            </table>
        </div>
    `;
    container.innerHTML = html;
}

// 2. Therapist Performance Report
function renderTherapistReport(container, bookings) {
    const lang = state.currentLang;
    const t = I18N[lang];
    
    // Filter out cancels & unavailable
    const validBookings = bookings.filter(b => !isCancellationStatus(b.bookingStatus) && !isUnavailabilityStatus(b.bookingStatus));
    
    // Calculate stats per therapist
    const therapistStats = {};
    
    // Initialize list from current therapists
    state.staff.forEach(s => {
        const name = typeof s === 'string' ? s : s.name;
        therapistStats[name] = { bookingsCount: 0, totalDuration: 0, requestedCount: 0 };
    });
    
    validBookings.forEach(b => {
        const staffName = b.staff;
        if (staffName) {
            if (!therapistStats[staffName]) {
                therapistStats[staffName] = { bookingsCount: 0, totalDuration: 0, requestedCount: 0 };
            }
            therapistStats[staffName].bookingsCount += 1;
            
            // parse duration
            let durationMin = parseInt(b.duration);
            if (isNaN(durationMin)) durationMin = 60; // default
            therapistStats[staffName].totalDuration += durationMin;
        }
        
        // Count requested count
        const bookedStaffName = b.bookedStaff;
        if (bookedStaffName && therapistStats[bookedStaffName]) {
            therapistStats[bookedStaffName].requestedCount += 1;
        }
    });
    
    const sortedStats = Object.entries(therapistStats).sort((a, b) => b[1].bookingsCount - a[1].bookingsCount);
    
    let html = `
        <div class="table-container" style="border: 1px solid var(--border-color); border-radius: var(--border-radius-md); overflow-x: auto;">
            <table class="spa-table">
                <thead>
                    <tr>
                        <th style="text-align: left;">${t.report_col_therapist}</th>
                        <th style="text-align: right;">${t.report_col_bookings_count}</th>
                        <th style="text-align: right;">${t.report_col_duration}</th>
                        <th style="text-align: right;">${t.report_col_avg_duration}</th>
                        <th style="text-align: right;">${t.report_col_requested}</th>
                    </tr>
                </thead>
                <tbody>
                    ${sortedStats.map(([name, data]) => {
                        const avgDuration = data.bookingsCount > 0 ? Math.round(data.totalDuration / data.bookingsCount) : 0;
                        return `
                            <tr>
                                <td style="font-weight: 500;">${name}</td>
                                <td style="text-align: right; font-weight: 600;">${data.bookingsCount}</td>
                                <td style="text-align: right;">${formatDuration(data.totalDuration)}</td>
                                <td style="text-align: right;">${avgDuration} mins</td>
                                <td style="text-align: right; color: var(--brand-rust); font-weight: 600;">${data.requestedCount}</td>
                            </tr>
                        `;
                    }).join('')}
                    ${sortedStats.length === 0 ? `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">No data in this period</td></tr>` : ''}
                </tbody>
            </table>
        </div>
    `;
    container.innerHTML = html;
}

// 3. Room Occupancy Report
function renderRoomReport(container, bookings, startStr, endStr) {
    const lang = state.currentLang;
    const t = I18N[lang];
    
    // Filter out cancels & unavailable
    const validBookings = bookings.filter(b => !isCancellationStatus(b.bookingStatus) && !isUnavailabilityStatus(b.bookingStatus));
    
    // Calculate distinct days in range
    const start = new Date(startStr);
    const end = new Date(endStr);
    const diffTime = Math.abs(end - start);
    const numDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    const businessHoursPerDay = 12; // Standard Operating Hours
    const totalOperatingMinutes = numDays * businessHoursPerDay * 60;
    
    const roomStats = {};
    state.rooms.forEach(r => {
        roomStats[r.name] = { bookingsCount: 0, occupiedMinutes: 0, steamCount: 0, capacityBeds: r.beds, hasSteam: r.hasSteam };
    });
    
    validBookings.forEach(b => {
        const roomName = b.room;
        if (roomName && roomStats[roomName]) {
            roomStats[roomName].bookingsCount += 1;
            
            let dur = parseInt(b.duration);
            if (isNaN(dur)) dur = 60;
            roomStats[roomName].occupiedMinutes += dur;
            
            // Check steam usage
            if (roomStats[roomName].hasSteam) {
                // If it is steam room, increment count
                roomStats[roomName].steamCount += 1;
            }
        }
    });
    
    let html = `
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 16px; background-color: var(--bg-tertiary); padding: 12px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color); width: fit-content;">
            ${lang === 'en' ? `Occupancy Rate is based on standard ${businessHoursPerDay}-hour daily operation (${formatDuration(totalOperatingMinutes)} total capacity per room for ${numDays} day(s)).` : `អត្រាប្រើប្រាស់បន្ទប់គណនាតាមប្រតិបត្តិការស្តង់ដារ ${businessHoursPerDay} ម៉ោងក្នុងមួយថ្ងៃ (ចំណុះសរុប ${formatDuration(totalOperatingMinutes)} ក្នុងមួយបន្ទប់សម្រាប់រយៈពេល ${numDays} ថ្ងៃ)។`}
        </div>
        
        <div class="table-container" style="border: 1px solid var(--border-color); border-radius: var(--border-radius-md); overflow-x: auto;">
            <table class="spa-table">
                <thead>
                    <tr>
                        <th style="text-align: left;">${t.report_col_room}</th>
                        <th style="text-align: right;">${t.report_col_bookings_count}</th>
                        <th style="text-align: right;">${t.report_col_duration}</th>
                        <th style="text-align: right;">${t.report_col_occupancy}</th>
                        <th style="text-align: right;">${t.report_col_steam_count}</th>
                    </tr>
                </thead>
                <tbody>
                    ${Object.entries(roomStats).map(([name, data]) => {
                        // Rate calculated by dividing occupied minutes by capacity (times beds)
                        const bedCapacity = data.capacityBeds || 1;
                        const roomCapacityMinutes = totalOperatingMinutes * bedCapacity;
                        const occupancyRate = roomCapacityMinutes > 0 ? Math.min(100, ((data.occupiedMinutes / roomCapacityMinutes) * 100)).toFixed(1) : 0;
                        
                        return `
                            <tr>
                                <td style="font-weight: 500;">${name} (${data.capacityBeds} ${data.capacityBeds === 1 ? 'bed' : 'beds'})</td>
                                <td style="text-align: right; font-weight: 600;">${data.bookingsCount}</td>
                                <td style="text-align: right;">${formatDuration(data.occupiedMinutes)}</td>
                                <td style="text-align: right; font-weight: 600; color: var(--color-success);">${occupancyRate}%</td>
                                <td style="text-align: right; color: var(--color-info);">${data.hasSteam ? data.steamCount : '-'}</td>
                            </tr>
                        `;
                    }).join('')}
                    ${Object.keys(roomStats).length === 0 ? `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">No rooms configured</td></tr>` : ''}
                </tbody>
            </table>
        </div>
    `;
    container.innerHTML = html;
}

// 4. Demographics and Channels Report
function renderDemographicsReport(container, bookings) {
    const lang = state.currentLang;
    const t = I18N[lang];
    
    // Filter out cancels & unavailable
    const validBookings = bookings.filter(b => !isCancellationStatus(b.bookingStatus) && !isUnavailabilityStatus(b.bookingStatus));
    const total = validBookings.length;
    
    const genders = { "Male": 0, "Female": 0, "Other": 0 };
    const nationalities = {};
    const guestTypes = {};
    const channels = {};
    
    validBookings.forEach(b => {
        // Gender
        let g = b.gender || "Other";
        if (g.toLowerCase().trim() === 'male' || g.trim() === 'ប្រុស') g = "Male";
        else if (g.toLowerCase().trim() === 'female' || g.trim() === 'ស្រី') g = "Female";
        else g = "Other";
        genders[g] += 1;
        
        // Nationality
        const nat = b.nationality || "Unknown";
        nationalities[nat] = (nationalities[nat] || 0) + 1;
        
        // Guest Type
        const gt = b.guestType || "Normal";
        guestTypes[gt] = (guestTypes[gt] || 0) + 1;
        
        // Booking Channel
        const chan = b.channel || "Walk-in";
        channels[chan] = (channels[chan] || 0) + 1;
    });
    
    const makeBreakdownHtml = (title, data) => {
        const sorted = Object.entries(data).sort((a,b) => b[1] - a[1]);
        return `
            <div class="card-panel" style="padding: 16px; background-color: var(--bg-secondary); border-radius: var(--border-radius-md); border: 1px solid var(--border-color); flex: 1; min-width: 250px;">
                <h4 style="font-weight:600; margin-bottom:12px; color:var(--brand-rust); font-size: 0.95rem; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">${title}</h4>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    ${sorted.map(([name, val]) => {
                        const pct = total > 0 ? ((val / total) * 100).toFixed(1) : 0;
                        return `
                            <div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
                                    <span>${name}</span>
                                    <span style="font-weight: 600;">${val} (${pct}%)</span>
                                </div>
                                <div style="height: 6px; background-color: var(--bg-tertiary); border-radius: 3px; overflow: hidden;">
                                    <div style="height: 100%; background: linear-gradient(90deg, var(--brand-rust), var(--color-warning)); width: ${pct}%"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                    ${sorted.length === 0 ? `<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 12px;">No data</div>` : ''}
                </div>
            </div>
        `;
    };
    
    let html = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
            ${makeBreakdownHtml(lang === 'en' ? 'Gender Distribution' : 'ការបែងចែកតាមភេទ', genders)}
            ${makeBreakdownHtml(lang === 'en' ? 'Customer Nationalities' : 'សញ្ជាតិរបស់ភ្ញៀវ', nationalities)}
            ${makeBreakdownHtml(lang === 'en' ? 'Guest Segmentation' : 'ចំណាត់ថ្នាក់ប្រភេទភ្ញៀវ', guestTypes)}
            ${makeBreakdownHtml(lang === 'en' ? 'Booking Channels' : 'ប្រភពនៃការកក់ (Channels)', channels)}
        </div>
    `;
    container.innerHTML = html;
}

// 5. Cancellation Report
function renderCancellationReport(container, bookings) {
    const lang = state.currentLang;
    const t = I18N[lang];
    
    // Count ONLY Cancellations
    const cancelledBookings = bookings.filter(b => isCancellationStatus(b.bookingStatus));
    const totalBookings = bookings.length;
    const cancelRate = totalBookings > 0 ? ((cancelledBookings.length / totalBookings) * 100).toFixed(1) : 0;
    
    let html = `
        <div class="report-summary-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div class="stat-card" style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">${t.report_total_bookings}</div>
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--text-primary);">${totalBookings}</div>
            </div>
            <div class="stat-card" style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">${t.report_cancelled_count}</div>
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-danger);">${cancelledBookings.length}</div>
            </div>
            <div class="stat-card" style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">${t.report_cancellation_rate}</div>
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-warning);">${cancelRate}%</div>
            </div>
        </div>
        
        <div class="table-container" style="border: 1px solid var(--border-color); border-radius: var(--border-radius-md); overflow-x: auto;">
            <table class="spa-table">
                <thead>
                    <tr>
                        <th style="text-align: left;">${t.report_col_date}</th>
                        <th style="text-align: left;">${t.report_col_client}</th>
                        <th style="text-align: left;">${t.report_col_service}</th>
                        <th style="text-align: left;">${t.report_col_therapist}</th>
                        <th style="text-align: left;">${t.report_col_room}</th>
                    </tr>
                </thead>
                <tbody>
                    ${cancelledBookings.map(b => {
                        return `
                            <tr class="row-booking-cancel">
                                <td>${b.date}</td>
                                <td>${b.clientName}</td>
                                <td>${b.serviceType}</td>
                                <td>${b.staff || '-'}</td>
                                <td>${b.room || '-'}</td>
                            </tr>
                        `;
                    }).join('')}
                    ${cancelledBookings.length === 0 ? `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">No cancelled bookings in this period</td></tr>` : ''}
                </tbody>
            </table>
        </div>
    `;
    container.innerHTML = html;
}

// 6. Service Unavailability Report
function renderUnavailabilityReport(container, bookings) {
    const lang = state.currentLang;
    const t = I18N[lang];
    
    // Filter out cancels & valid bookings
    const unavailableBookings = bookings.filter(b => isUnavailabilityStatus(b.bookingStatus));
    const totalBookings = bookings.length;
    const unavailableRate = totalBookings > 0 ? ((unavailableBookings.length / totalBookings) * 100).toFixed(1) : 0;
    
    // Breakdown by specific reason
    const reasonCounts = {
        "Not Male Therapist": 0,
        "Not Enough Female Therapist": 0,
        "Therapist is not on duty": 0,
        "Not available": 0
    };
    
    unavailableBookings.forEach(b => {
        if (!b.bookingStatus) return;
        const s = b.bookingStatus.toLowerCase().trim();
        if (s === 'not male therapist') {
            reasonCounts["Not Male Therapist"] += 1;
        } else if (s === 'not enough female therapist') {
            reasonCounts["Not Enough Female Therapist"] += 1;
        } else if (s === 'therapist is not on duty') {
            reasonCounts["Therapist is not on duty"] += 1;
        } else {
            // "Not available" or contains unavailable keywords
            reasonCounts["Not available"] += 1;
        }
    });
    
    let html = `
        <div class="report-summary-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div class="stat-card" style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">${t.report_total_bookings}</div>
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--text-primary);">${totalBookings}</div>
            </div>
            <div class="stat-card" style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">${t.report_total_unavailable}</div>
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-danger);">${unavailableBookings.length}</div>
            </div>
            <div class="stat-card" style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">${t.report_unavailability_rate}</div>
                <div style="font-size: 1.6rem; font-weight: 700; color: var(--color-warning);">${unavailableRate}%</div>
            </div>
        </div>
        
        <div class="card-panel" style="padding: 20px; background-color: var(--bg-secondary); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color); margin-bottom: 24px;">
            <h4 style="font-weight: 600; margin-bottom: 12px; color: var(--text-primary);">${lang === 'en' ? 'Unavailability Reason Breakdown' : 'មូលហេតុនៃការមិនអាចផ្តល់ជូនសេវាកម្ម'}</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                ${Object.entries(reasonCounts).map(([reason, count]) => {
                    const pct = unavailableBookings.length > 0 ? ((count / unavailableBookings.length) * 100).toFixed(1) : 0;
                    return `
                        <div style="background-color: var(--bg-tertiary); padding: 12px; border-radius: var(--border-radius-md); border: 1px solid var(--border-color);">
                            <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 500;">${reason}</div>
                            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary); margin: 4px 0;">${count}</div>
                            <div style="font-size: 0.75rem; color: var(--color-danger); font-weight: 500;">${pct}%</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        
        <div class="table-container" style="border: 1px solid var(--border-color); border-radius: var(--border-radius-md); overflow-x: auto;">
            <table class="spa-table">
                <thead>
                    <tr>
                        <th style="text-align: left;">${t.report_col_date}</th>
                        <th style="text-align: left;">${t.report_col_client}</th>
                        <th style="text-align: left;">${t.report_col_service}</th>
                        <th style="text-align: left;">${t.report_col_status}</th>
                        <th style="text-align: left;">${t.report_col_room}</th>
                    </tr>
                </thead>
                <tbody>
                    ${unavailableBookings.map(b => {
                        return `
                            <tr class="row-booking-other">
                                <td>${b.date}</td>
                                <td>${b.clientName}</td>
                                <td>${b.serviceType}</td>
                                <td><span class="badge badge-booking-other" style="background-color: var(--color-warning-bg); color: var(--color-warning);">${b.bookingStatus}</span></td>
                                <td>${b.room || '-'}</td>
                            </tr>
                        `;
                    }).join('')}
                    ${unavailableBookings.length === 0 ? `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">No unavailable records in this period</td></tr>` : ''}
                </tbody>
            </table>
        </div>
    `;
    container.innerHTML = html;
}

// --- Google Sheets Cloud Sync Modules ---
async function pullFromGoogleSheet() {
    if (!state.googleSheetUrl) return;
    setGoogleSheetSyncStatus("syncing");
    try {
        const response = await fetch(state.googleSheetUrl);
        if (!response.ok) throw new Error("Server returned status " + response.status);
        const data = await response.json();
        
        // If the Google Sheet is brand new and completely empty, push our local database to it first
        const isSheetEmpty = (!data.bookings || data.bookings.length === 0) &&
                             (!data.staff || data.staff.length === 0) &&
                             (!data.rooms || data.rooms.length === 0);
                             
        if (isSheetEmpty) {
            console.log("Google Sheet is empty, initializing it with local data...");
            await pushToGoogleSheet();
            return;
        }
        
        // Merge bookings and configs
        if (data.bookings) state.bookings = data.bookings;
        if (data.staff && data.staff.length > 0) state.staff = data.staff;
        if (data.rooms && data.rooms.length > 0) state.rooms = data.rooms;
        if (data.services && data.services.length > 0) state.services = data.services;
        if (data.settings) {
            if (data.settings.channels) state.channels = data.settings.channels;
            if (data.settings.payments) state.payments = data.settings.payments;
            if (data.settings.clientStatuses) state.clientStatuses = data.settings.clientStatuses;
            if (data.settings.discounts) state.discounts = data.settings.discounts;
            if (data.settings.bookingStatuses) state.bookingStatuses = data.settings.bookingStatuses;
            if (data.settings.tableTitle) state.tableTitle = data.settings.tableTitle;
            if (data.settings.customColumnLabels) state.customColumnLabels = data.settings.customColumnLabels;
            if (data.settings.columnWidths) state.columnWidths = data.settings.columnWidths;
            if (data.settings.customLogo) state.customLogo = data.settings.customLogo;
            if (data.settings.theme) {
                state.theme = data.settings.theme;
                document.body.setAttribute("data-theme", state.theme);
                updateThemeIcons();
            }
        }
        
        // Save locally for cache/offline
        localStorage.setItem("spa_bookings", JSON.stringify(state.bookings));
        localStorage.setItem("spa_rooms", JSON.stringify(state.rooms));
        localStorage.setItem("spa_staff", JSON.stringify(state.staff));
        localStorage.setItem("spa_services", JSON.stringify(state.services));
        localStorage.setItem("spa_payments", JSON.stringify(state.payments));
        localStorage.setItem("spa_client_statuses", JSON.stringify(state.clientStatuses));
        localStorage.setItem("spa_discounts", JSON.stringify(state.discounts));
        localStorage.setItem("spa_booking_statuses", JSON.stringify(state.bookingStatuses));
        localStorage.setItem("spa_channels", JSON.stringify(state.channels));
        localStorage.setItem("spa_theme", state.theme);
        localStorage.setItem("spa_table_title", state.tableTitle);
        localStorage.setItem("spa_custom_column_labels", JSON.stringify(state.customColumnLabels));
        localStorage.setItem("spa_column_widths", JSON.stringify(state.columnWidths));
        if (state.customLogo) {
            localStorage.setItem("spa_logo", state.customLogo);
        } else {
            localStorage.removeItem("spa_logo");
        }
        
        renderAllViews();
        setGoogleSheetSyncStatus("success");
    } catch (err) {
        console.error("Failed to pull from Google Sheets:", err);
        setGoogleSheetSyncStatus("error");
    }
}

async function pushToGoogleSheet() {
    if (!state.googleSheetUrl) return;
    setGoogleSheetSyncStatus("syncing");
    try {
        const payload = {
            bookings: state.bookings,
            staff: state.staff,
            rooms: state.rooms,
            services: state.services,
            settings: {
                channels: state.channels,
                payments: state.payments,
                clientStatuses: state.clientStatuses,
                discounts: state.discounts,
                bookingStatuses: state.bookingStatuses,
                tableTitle: state.tableTitle,
                customColumnLabels: state.customColumnLabels,
                columnWidths: state.columnWidths,
                customLogo: state.customLogo,
                theme: state.theme
            }
        };
        
        const response = await fetch(state.googleSheetUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) throw new Error("HTTP error " + response.status);
        const result = await response.json();
        if (result.status === "success") {
            setGoogleSheetSyncStatus("success");
        } else {
            throw new Error(result.message || "Unknown error from Apps Script");
        }
    } catch (err) {
        console.error("Failed to push to Google Sheets:", err);
        setGoogleSheetSyncStatus("error");
    }
}

function updateGoogleSheetUI() {
    const btn = document.getElementById("gs-sync-button");
    const input = document.getElementById("google-sheet-url-input");
    const statusText = document.getElementById("gs-connection-status");
    
    if (btn) {
        btn.style.display = state.googleSheetUrl ? "flex" : "none";
    }
    if (input) {
        input.value = state.googleSheetUrl;
    }
    if (statusText) {
        if (state.googleSheetUrl) {
            statusText.style.display = "block";
            statusText.style.color = "var(--text-secondary)";
            statusText.textContent = state.currentLang === 'en' ? "Status: Connected" : "ស្ថានភាព៖ បានភ្ជាប់";
        } else {
            statusText.style.display = "none";
        }
    }
}

function setGoogleSheetSyncStatus(status) {
    const dot = document.getElementById("gs-sync-indicator");
    const icon = document.getElementById("gs-sync-icon");
    const statusText = document.getElementById("gs-connection-status");
    const btn = document.getElementById("gs-sync-button");
    
    if (!dot || !icon) return;
    
    if (status === "syncing") {
        dot.style.backgroundColor = "var(--accent-gold)";
        icon.classList.add("spin-anim");
        if (btn) btn.title = state.currentLang === 'en' ? "Syncing..." : "កំពុងសមកាលកម្ម...";
    } else if (status === "success") {
        dot.style.backgroundColor = "#10b981";
        icon.classList.remove("spin-anim");
        if (btn) btn.title = state.currentLang === 'en' ? "Connected & Synced (Click to sync now)" : "បានភ្ជាប់ និងសមកាលកម្ម (ចុចដើម្បីសមកាលកម្មឡើងវិញ)";
        if (statusText) {
            statusText.style.color = "#10b981";
            statusText.textContent = state.currentLang === 'en' ? "Status: Synced successfully" : "ស្ថានភាព៖ បានសមកាលកម្មជោគជ័យ";
        }
    } else if (status === "error") {
        dot.style.backgroundColor = "#ef4444";
        icon.classList.remove("spin-anim");
        if (btn) btn.title = state.currentLang === 'en' ? "Sync Error! Click to try again" : "កំហុសសមកាលកម្ម! ចុចដើម្បីព្យាយាមម្តងទៀត";
        if (statusText) {
            statusText.style.color = "#ef4444";
            statusText.textContent = state.currentLang === 'en' ? "Status: Sync failed! Check URL." : "ស្ថានភាព៖ បរាជ័យសមកាលកម្ម! ពិនិត្យមើល URL។";
        }
    }
}

function saveGoogleSheetUrl() {
    const urlInput = document.getElementById("google-sheet-url-input");
    if (!urlInput) return;
    
    const url = urlInput.value.trim();
    if (url === "") {
        state.googleSheetUrl = "";
        localStorage.removeItem("spa_google_sheet_url");
        updateGoogleSheetUI();
        showToast(state.currentLang === 'en' ? "Google Sheet disconnected." : "បានផ្តាច់ទំនាក់ទំនង Google Sheet។", "warning");
        return;
    }
    
    if (!url.startsWith("https://script.google.com/")) {
        showToast(state.currentLang === 'en' ? "Invalid URL. Please enter a Google Apps Script web app link." : "តំណភ្ជាប់មិនត្រឹមត្រូវ។ សូមបញ្ចូលតំណភ្ជាប់ Google Apps Script web app។", "error");
        return;
    }
    
    state.googleSheetUrl = url;
    localStorage.setItem("spa_google_sheet_url", url);
    updateGoogleSheetUI();
    showToast(state.currentLang === 'en' ? "Connecting to Google Sheets..." : "កំពុងភ្ជាប់ទៅកាន់ Google Sheets...", "info");
    
    pullFromGoogleSheet();
}

function triggerGoogleSheetSync() {
    if (state.googleSheetUrl) {
        showToast(state.currentLang === 'en' ? "Synchronizing with Google Sheets..." : "កំពុងសមកាលកម្មជាមួយ Google Sheets...", "info");
        pullFromGoogleSheet();
    }
}




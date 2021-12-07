export const en = {
  'Close Microphone': 'close microphone',
  'Open Microphone': 'open microphone',
  'Camera Not Available': 'Camera Not Available',
  'Microphone Not Available': 'Microphone Not Available',
  'Close Camera': 'close camera',
  'Open Camera': 'open camera',
  'Clear Podium': 'Close Podium',
  'Clear Podiums': 'Clear Podiums',
  'Close Whiteboard': 'close whiteboard',
  'Open Whiteboard': 'open whiteboard',
  Star: 'star',
  'Open Private Call': 'open private call',
  'Close Private Call': 'close private call',
  role: {
    teacher: 'Teacher',
    student: 'Student',
    assistant: 'Assistant',
  },
  disabled: 'Disabled',
  whiteboard: {
    converting: 'Converting',
    'disconnect-img-alt': 'Whiteboard Disconnected',
    'disconnect-btn': 'Connect Again',
    'courseWare-loading': 'CourseWare Loading...',
    'h5-courseWare': 'H5 CourseWare',
    'test-courseWare': 'Test CourseWare',
  },
  screen_share: 'Screen Share',
  kick: {
    kick_out_student: 'Kick Out',
  },
  radio: {
    kicked_once: 'Kick out room this time',
    ban: 'Banned',
  },
  course: {
    pre_class: 'Pre Class',
    in_class: 'In Class',
    end_class: 'End Class',
    join_failed: 'Join Failure',
    screen_sharing: 'Screen Sharing',
  },
  device: {
    camera: 'Camera',
    speaker: 'Speaker',
    microphone: 'Microphone',
    microphone_volume: 'Microphone Volume',
    speaker_volume: 'Speaker Volume',
  },
  student: {
    student_name: 'Name',
    camera: 'Camera',
    microphone: 'Microphone',
    operation: 'Remove',
  },
  roster: {
    chat: 'Mute Chat',
    teacher_name: 'Teacher：',
    user_list: 'User List',
    student_name: 'Name',
    student_co_video: 'CoVideo',
    close_student_co_video: 'You are not on stage now and you can not interact with others',
    open_student_co_video: 'The teacher has invited you to stage，you can interact with others now',
    board_state: 'Board',
    camera_state: 'Camera',
    microphone_state: 'Microphone',
    reward: 'Reward',
    kick: 'Kick',
    granted: 'Auth',
    shift: 'Shift',
    everyone: 'Everyone',
    available: 'Available',
    students_in: 'students in',
    sequence: 'sequence',
    random: 'random',
    order_every: 'order every',
    seconds: 'seconds',
  },
  hands_up: 'Hands Up',
  co_video: {
    remote_open_camera: 'Your camera has been turned on',
    remote_open_microphone: 'Your mic has been turned on',
    remote_grant_board: 'You can now use the whiteboard tools',
    remote_close_camera: 'Your camera has been turned off',
    remote_close_microphone: 'Your mic has been turned off',
    remote_revoke_board: 'You cannot use the whiteboard tools',
    received_student_hands_up: 'A student wants to get on the stage',
    received_teacher_accepted: 'Teacher Accepted',
    received_teacher_refused: 'Teacher Refused',
    received_student_cancel: 'Teacher Canceled',
    received_message_timeout: 'No Responder, Try again',
    hands_up_requsted: 'Your request has been sent',
    hands_up_cancelled: 'Your request has been cancelled',
  },
  private_media_chat: {
    chat_started: 'Private media chat started',
    chat_ended: 'Private media chat ended',
  },
  signal: {
    delay: 'Delay',
    lose: 'Lose',
    status: 'Status',
    CPU: 'CPU',
    receive: 'Receive',
    send: 'Send',
  },
  placeholder: {
    muted_chat: 'Muted Chat',
    empty_chat: 'Empty Message',
    empty_quiz: 'Empty Question',
    enable_chat_muted: 'Student Chat Muted',
    input_message: 'Please Input Message',
  },
  error: {
    banned: 'Forbidden',
    cannot_join: 'You have been forbidden to enter this classroom!',
    conflict: 'Hands Up Conflict',
    not_found: 'Page Not Found',
    apply_co_video_limit: 'Apply co-video over maximum',
    send_co_video_limit: 'Roll call co-video over maximum',
    components: {
      paramsEmpty: 'params：{reason} can`t be empty',
    },
    class_end: 'The classroom is end.',
    unknown: 'unknown error',
    room_is_full: 'The room is full',
  },
  toast: {
    mute_chat: 'You were silenced by {hostName}',
    unmute_chat: 'Your were allowed to chat by {hostName}',
    remote_mute_chat: '{studentName} was silenced by {hostName}',
    remote_unmute_chat: '{studentName} was allowed to chat by {hostName}',
    add_screen_share: 'Teacher starts to the screen share',
    remove_screen_share: 'Teacher stops the screen share',
    granted_board_success: 'Grant Permission success',
    revoke_board_success: 'Revoke Permission success',
    create_screen_share_failed: 'Create screen share failed',
    kick_by_other_side: 'Kick out by other client',
    screen_share: 'Screen Share',
    close_ppt: 'Close CourseWare',
    sure_close_ppt: 'Are you sure to close?',
    end_class: 'End Class',
    quit_from_room: 'Leave Class Room',
    kick_by_teacher: 'You have been kicked out of the classroom',
    upload_log_failure: 'Upload Log Failure，ErrorName: {reason}，see more details in devtool',
    show_log_id: `Report your log ID: {reason}`,
    api_login_failured: 'Join Failured, Reason: {reason}',
    confirm: 'Confirm',
    cancel: 'Cancel',
    leave_room: 'Leave Classroom',
    leave_room2: 'Leave',
    quit_room: 'Are you sure to exit the classroom?',
    kick: 'Account remote login',
    login_failure: 'login failure',
    whiteboard_lock: 'Whiteboard follow',
    whiteboard_unlock: 'Whiteboard nofollow',
    canceled_screen_share: 'Canceled screen sharing',
    screen_sharing_failed: 'Screen sharing failed, reason: {reason}',
    recording_failed: 'Start cloud recording failed, reason: {reason}',
    start_recording: {
      title: 'Start Recording',
      body: 'Are you sure to start recording the classroom?',
      success: 'Recording successfully started',
    },
    stop_recording: {
      title: 'Stop Recording',
      body: 'Are you sure to stop recording the classroom?',
      success: 'Recording successfully stopped',
    },
    recording_too_short: 'Recording too short, at least 15 seconds',
    rtm_login_failed: 'login failure, please check your network',
    rtm_login_failed_reason: 'login failure, reason: {reason}',
    replay_failed: 'Replay Failed please refresh browser',
    teacher_exists: 'Teacher already exists, Please waiting for 30s or reopen new class',
    student_over_limit:
      'Student have reached upper limit, , Please waiting for 30s or rejoin new class',
    teacher_and_student_over_limit: 'The number of students and teacher have reached upper limit',
    teacher_accept_whiteboard: 'Teacher already grant your whiteboard',
    teacher_cancel_whiteboard: 'Teacher already cancel your whiteboard',
    teacher_accept_co_video: 'Teacher already accept co-video',
    teacher_reject_co_video: 'Teacher already rejected co-video',
    teacher_cancel_co_video: 'Teacher already canceled co-video',
    student_cancel_co_video: 'Student canceled co-video',
    student_peer_leave: '"{reason}" Left',
    student_send_co_video_apply: '"{reason}" send the co-video request',
    stop_co_video: 'Stop "{reason}" co-video',
    reject_co_video: 'Reject co-video',
    close_co_video: 'Close co-video',
    close_youself_co_video: 'Stop co-video',
    accept_co_video: 'Accept co-video',
    successfully_joined_the_room: 'Successfully joined the room',
    failed_to_join_the_room: 'Failed to join the room',
    failed_to_authorize_whiteboard: 'Failed to authorize whiteboard',
    failed_to_deauthorize_whiteboard: 'Failed to deauthorize whiteboard',
    failed_to_query_playback_list: 'Failed to query playback list',
    audio_equipment_has_changed: 'Audio equipment has changed',
    video_equipment_has_changed: 'Video equipment has changed',
    failed_to_initiate_screen_sharing: 'Failed to initiate screen sharing',
    failed_to_end_screen_sharing: 'Failed to end screen sharing',
    failed_to_initiate_screen_sharing_to_remote: 'Failed to initiate screen sharing to remote',
    failed_to_enable_screen_sharing: 'Failed to enable screen sharing',
    failed_to_enable_screen_sharing_permission_denied:
      'Open screen capture failed！Please grant permission for screen capture!',
    failed_to_send_chat: 'Failed to send chat',
    failed_to_translate_chat: 'Failed to translate chat',
    failed_to_send_reward: 'Failed to send reward',
    failed_to_join_rtc_please_refresh_and_try_again:
      'Failed to join rtc, please refresh and try again',
    leave_rtc_channel: 'Leave rtc channel',
    failed_to_leave_rtc: 'Failed to leave rtc',
    co_video_close_success: 'CoVideo dismissed success',
    co_video_close_failed: 'CoVideo dismissed failure',
    publish_rtc_success: 'Publish RTC Success',
    open_whiteboard_follow: 'open whiteboard follow',
    close_whiteboard_follow: 'close whiteboard follow',
    i: 'I',
    teacher: 'Teacher',
    the_teacher_authorized_your_whiteboard: 'The teacher authorized your whiteboard',
    the_teacher_cancelled_your_whiteboard_permission:
      'The teacher cancelled your whiteboard permission',
    publish_business_flow_successfully: 'Publish business flow successfully',
    media_method_call_failed: 'Media method call failed',
    successfully_left_the_business_channel: 'Successfully left the business channel',
    course_started_successfully: 'Course start successfully',
    setting_start_failed: 'Setting start failed',
    the_course_ends_successfully: 'Course end successfully',
    setting_ended_failed: 'Setting ended failed',
    start_recording_successfully: 'Start recording successfully',
    start_recording_failed: 'Start recording failed',
    successfully_ended_recording: 'Successfully_ended_recording',
    failed_to_end_recording: 'Failed to end recording',
    you_have_a_default_message: 'You have a default message',
    the_teacher_agreed: 'Teacher Agreed',
    student_applied: 'Student applied',
    you_were_dismissed_by_the_teacher: 'You were dismissed by the teacher',
    student_canceled: 'Student canceled',
    the_teacher_refused: 'Teacher refused',
    failed_to_initiate_a_raise_of_hand_application:
      'Failed to initiate a raise of hand application',
    failed_to_end_the_call: 'Failed to end the call',
    failed_to_join_board: 'Failed to join board',
    stop_screen_share_failed: 'Stop screen share failed',
    classroom_remote_join: 'Account was logged in from remote device, you have left the classroom',
    time_interval_between_start: `The class will start in {reason} minutes`,
    time_interval_between_end: `The class will be over in {reason} minutes`,
    class_is_end: `Class is over. The classroom will be closed in {reason} minutes`,
    time_interval_between_close: `The classroom will be closed in {reason}`,
    reward_limit: 'The maximum number of trophies in the room has been reached',
    chat_enable: 'Enable Mute Chat',
    chat_disable: 'Disable Mute Chat',
    upload_failure: 'Upload Failure',
    download_success: 'Download Success',
    download_failure: 'Download Failure',
  },
  end_class_confirm: 'Are sure end classroom',
  notice: {
    student_interactive_apply: `"{reason}" want to co-video`,
  },
  scaffold: {
    search: 'Search',
    student_list: 'Student List',
    pencil: 'Pencil',
    laser_pointer: 'Laser pointer',
    countdown: 'countdown',
    straight: 'straight',
    circle: 'circle',
    rectangle: 'rectangle',
    selector: 'selector',
    clicker: 'mouse',
    eraser: 'eraser',
    color: 'color',
    blank_page: 'add page',
    move: 'move',
    follow: 'Follow',
    un_follow: 'UnFollow',
    screen_share: 'Screen Share',
    stop_screen_share: 'Stop Screen Share',
    cloud_storage: 'Cloud Storage',
    text: 'Text',
    tools: 'Tools',
    user_list: 'User List',
  },
  message: 'Message',
  quiz: 'Question',
  en: 'English',
  cloud: {
    fileName: 'file name',
    size: 'size',
    progress: 'progress',
    updated_at: 'updated at',
    operation: 'operation',
    publicResources: 'Public Resources',
    deleteTip: 'Are you sure to delete the selected file?',
    personalResources: 'Personal Resources',
    downloadResources: 'Download Resources',
    upload: 'Upload',
    delete: 'Delete',
    download: 'Download',
    downloading: 'Download',
    pause: 'Pause',
    upload_success: 'Upload Success',
  },
  media: {
    camera: 'Camera',
    switch_camera: 'Switch Camera',
    microphone: 'Microphone',
    switch_microphone: 'Switch Microphone',
    microphone_volume: 'Microphone Volume',
    speaker: 'Speaker',
    switch_speaker: 'Switch Speaker',
    volume: 'Volume',
    adjust_volume: 'Adjust Volume',
    test_speaker: 'Test',
    camera_error: 'Device exception, camera is unplugged or occupied and cannot be used!',
    microphone_error: 'Device exception, microphone is unplugged or occupied and cannot be used!',
    mirror: 'mirror',
    beauty: 'beauty',
    whitening: 'Whitening',
    buffing: 'Buffing',
    ruddy: 'Ruddy',
  },
  tool: {
    board_name: 'Whiteboard',
    screen_share: 'Screen Share',
    selector: 'mouse selector',
    pencil: 'pencil',
    rectangle: 'rectangle',
    ellipse: 'ellipse',
    eraser: 'eraser',
    text: 'text',
    color_picker: 'color picker',
    add: 'add new page',
    upload: 'upload ',
    hand_tool: 'hand selector',
    extension_tool: 'extension tool',
    clear: 'clear',
    disk: 'disk',
    prev: 'back',
    next: 'forward',
    zoomIn: 'zoom in',
    zoomOut: 'zoom out',
    fullScreen: 'full screen',
    reduction: 'reduction',
    reset: 'center',
  },
  pretest: {
    title: 'Device Test',
    settingTitle: 'Device Setting',
    finishTest: 'Finish',
    detect_new_device: 'The device has installed, Please try it!',
    camera_move_out: 'Camera is pulled out, unable to display video!',
    mic_move_out: 'Microphone is pulled out!',
    device_move_out: 'Device is pulled out!',
    device_not_working: 'The device is not working properly!',
    detect_new_device_in_room:
      'The device has installed, Please click setting and select the new device.',
    teacher_device_may_not_work: "There is something wrong with the teacher's device",
  },
  'biz-header': {
    perf: 'Perf',
    setting: 'Setting',
    exit: 'Exit',
    recording: 'Recording',
    start_record: 'Start Recording',
    stop_record: 'Stop Recording',
  },
  nav: {
    delay: 'Delay: ',
    network: 'Network: ',
    cpu: 'CPU: ',
    class_end: 'Class end',
    class_start: 'Class start',
    back: 'Back',
    to_start_in: 'To start in: ',
    started_elapse: 'Started: ',
    ended_elapse: 'Ended: ',
    class_not_started: 'Class session is not started',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    short: {
      hours: 'hrs',
      minutes: 'mins',
      seconds: 'secs',
    },
    signal_good: 'Good',
    signal_weak: 'Weak',
    signal_bad: 'Bad',
    signal_unknown: 'Unknown',
  },
  send: 'Send',
  home: {
    form_title: 'Free Use',
    roomId: 'RoomId',
    roomId_placeholder: 'Please input roomId',
    userId: 'UserId',
    userId_placeholder: 'Please input userId',
    roomName: 'Room',
    roomName_placeholder: 'Please input room name',
    nickName: 'Name',
    nickName_placeholder: 'Please input your name',
    roomType: 'Type',
    roomType_placeholder: 'Please select class type',
    roomType_1v1: 'One to One Classroom',
    roomType_interactiveSmallClass: 'Interactive Small Classroom',
    roomType_interactiveBigClass: 'Lecture Hall',
    role: 'Role',
    role_placeholder: 'Please select your role',
    encryptionMode: 'Mode',
    encryptionMode_placeholder: 'Please select your mode',
    encryptionKey: 'Key',
    encryptionKey_placeholder: 'Please input your key',
    role_teacher: 'Teacher',
    role_student: 'Student',
    role_assistant: 'Assistant',
    role_audience: 'Audience',
    language: 'Language:',
    language_placeholder: 'Please choose language',
    duration: 'Duration',
    duration_unit: 'mins',
    enter_classroom: 'Enter',
    region_placeholder: 'Please choose region',
    region: 'Region:',
    'header-left-title': 'Agora Flexible Classroom',
    about: 'About',
    'input-error-msg': 'Letter or number only',
  },
  'home-about': {
    'privacy-policy': 'Privacy Policy',
    'product-disclaimer': 'Product Disclaimer',
    'sign-up': 'Sign up Agora.io',
    'version-time': 'Version Time',
    'sdk-version': 'SDK Version',
    'classroom-version': 'Flexible Classroom Version',
    check: 'View',
    register: 'Sign up',
  },
  disclaimer: {
    title: 'Product Disclaimer',
    'content-a': `Agora Live ("this product") is a product provided by Agora . Agora enjoys the copyright and ownership of this product. It is hereby granted free of charge to anyone who obtains a copy of this product and related documentation (hereinafter referred to as "software") to try the software without limitation, including but not limited to trial, copy, modify, merge, publish, distribute, but this product shall not be used For any commercial use, you may not sublicense and / or sell copies of the software.`,
    'content-b': `This product is provided "as is" without any express warranty, including but not limited to guarantees of suitability, suitability for specific purposes, and non-infringement. Whether it is due to any contract, infringement or other forms of conduct related to this product or the trial of this product or other methods, Agora will not be responsible for any claims, damages or other liabilities.`,
    'content-c': `You are free to choose whether to try the services provided by this product. If you download, install, or try the services provided in this product, it means that you trust the owner of the product, and Agora shall not be responsible for any form of loss or injury caused by yourself or others when you try the services provided in this product for any reason.`,
  },
  countdown: {
    appName: 'Countdown',
    seconds: 'seconds',
    start: 'Start',
    restart: 'Restart',
  },
  confirm: {
    delete: 'Delete prompt',
  },
  stream: {
    'placeholder.loading': 'Camera is loading',
    'placeholder.muted': 'Camera is closed',
    'placeholder.broken': 'Camera is broken',
    'placeholder.notpresent.teacher': 'Teacher is not in the classroom',
    'placeholder.notpresent.student': 'Student is not in the classroom',
  },
  screenshare: {
    display: 'Display {reason}',
  },
  toast2: {
    'teacher.turn.off.my.mic': 'Your mic is turned off by teacher',
    'teacher.turn.on.my.mic': 'Your mic is turned on by teacher',
    'teacher.turn.off.my.cam': 'Your camera is turned off by teacher',
    'teacher.turn.on.my.cam': 'Your camera is turned on by teacher',
    'teacher.grant.permission': 'You can now draw on your whiteboard',
    'teacher.revoke.permission': 'You can no longer draw on your whiteboard',
    'teacher.accept.onpodium':
      'The teacher has invited you to stage，you can interact with others now',
    'teacher.revoke.onpodium': 'You are not on stage now and you can not interact with others',
    'teacher.reward': 'Congratulations to {reason} for getting a star',
  },
};
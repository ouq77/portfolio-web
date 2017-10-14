/**
 * Interface for a CodeSchool User
 */
interface CodeSchoolUser {
  username: string;
  member_since: string;
  total_score: number;
  avatar: string;
}

/**
 * Interface for a CodeSchool Course
 */
interface CodeSchoolCourse {
  title: string;
  url: string;
  badge: string;
}

/**
 * Interface for a CodeSchool Badge
 */
interface CodeSchoolBadge {
  name: string;
  badge: string;
  course_url: string;
}

/**
 * Interface for a CodeSchool object
 */
export interface CodeSchool {
  user: CodeSchoolUser;
  courses: {
    completed: Array<CodeSchoolCourse>;
    in_progress: Array<CodeSchoolCourse>;
  };
  badges: Array<CodeSchoolBadge>;
}

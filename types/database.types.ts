export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string;
          slug: string;
          course_name: string;
          course_level: string;
          start_date: string;
          days: string;
          time: string;
          course_link: string;
          image_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          course_name: string;
          course_level: string;
          start_date: string;
          days: string;
          time: string;
          course_link: string;
          image_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          course_name?: string;
          course_level?: string;
          start_date?: string;
          days?: string;
          time?: string;
          course_link?: string;
          image_url?: string | null;
          created_at?: string;
        };
      };
      questions: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          difficulty: "Easy" | "Medium" | "Hard" | "Very Hard";
          question_text: string;
          options: Json | null;
          correct_answer: string | null;
          explanation: string | null;
          image_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          category: string;
          difficulty: "Easy" | "Medium" | "Hard" | "Very Hard";
          question_text: string;
          options?: Json | null;
          correct_answer?: string | null;
          explanation?: string | null;
          image_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          category?: string;
          difficulty?: "Easy" | "Medium" | "Hard" | "Very Hard";
          question_text?: string;
          options?: Json | null;
          correct_answer?: string | null;
          explanation?: string | null;
          image_url?: string | null;
          created_at?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          student_name: string;
          gre_score: number | null;
          review_text: string;
          rating: number;
          image_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          student_name: string;
          gre_score?: number | null;
          review_text: string;
          rating?: number;
          image_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          student_name?: string;
          gre_score?: number | null;
          review_text?: string;
          rating?: number;
          image_url?: string | null;
          created_at?: string;
        };
      };
      announcements: {
        Row: {
          id: string;
          left_text: string;
          left_date: string;
          left_link_url: string | null;
          right_text: string;
          right_date: string;
          right_link_url: string | null;
          updated_at: string;
        };
        Insert: {
          id?: string;
          left_text: string;
          left_date: string;
          left_link_url?: string | null;
          right_text: string;
          right_date: string;
          right_link_url?: string | null;
          updated_at?: string;
        };
        Update: {
          id?: string;
          left_text?: string;
          left_date?: string;
          left_link_url?: string | null;
          right_text?: string;
          right_date?: string;
          right_link_url?: string | null;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

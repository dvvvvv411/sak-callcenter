export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      activity_tracking: {
        Row: {
          agent_id: string
          duration: number | null
          id: string
          pause_reason: string | null
          status: Database["public"]["Enums"]["agent_status"]
          timestamp: string
        }
        Insert: {
          agent_id: string
          duration?: number | null
          id?: string
          pause_reason?: string | null
          status: Database["public"]["Enums"]["agent_status"]
          timestamp?: string
        }
        Update: {
          agent_id?: string
          duration?: number | null
          id?: string
          pause_reason?: string | null
          status?: Database["public"]["Enums"]["agent_status"]
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_tracking_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_bonuses: {
        Row: {
          agent_id: string
          amount: number
          bonus_type: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          updated_at: string
        }
        Insert: {
          agent_id: string
          amount: number
          bonus_type?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          updated_at?: string
        }
        Update: {
          agent_id?: string
          amount?: number
          bonus_type?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_bonuses_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      agents: {
        Row: {
          commission_rate: number | null
          created_at: string
          current_status: Database["public"]["Enums"]["agent_status"] | null
          first_name: string
          hourly_rate: number | null
          id: string
          languages: string[] | null
          last_name: string
          status: Database["public"]["Enums"]["agent_activity_status"] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          commission_rate?: number | null
          created_at?: string
          current_status?: Database["public"]["Enums"]["agent_status"] | null
          first_name: string
          hourly_rate?: number | null
          id?: string
          languages?: string[] | null
          last_name: string
          status?: Database["public"]["Enums"]["agent_activity_status"] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          commission_rate?: number | null
          created_at?: string
          current_status?: Database["public"]["Enums"]["agent_status"] | null
          first_name?: string
          hourly_rate?: number | null
          id?: string
          languages?: string[] | null
          last_name?: string
          status?: Database["public"]["Enums"]["agent_activity_status"] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      businesses: {
        Row: {
          assigned_agents: string[] | null
          contact_info: Json | null
          created_at: string
          description: string | null
          id: string
          inventory_link: string | null
          inventory_pdf_url: string | null
          name: string
          updated_at: string
        }
        Insert: {
          assigned_agents?: string[] | null
          contact_info?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          inventory_link?: string | null
          inventory_pdf_url?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          assigned_agents?: string[] | null
          contact_info?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          inventory_link?: string | null
          inventory_pdf_url?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      call_instructions: {
        Row: {
          agent_id: string
          business_id: string
          completed_at: string | null
          created_at: string
          customer_id: string | null
          description: string | null
          id: string
          photo_url: string | null
          priority: Database["public"]["Enums"]["priority_level"] | null
          status: Database["public"]["Enums"]["instruction_status"] | null
          title: string
          updated_at: string
        }
        Insert: {
          agent_id: string
          business_id: string
          completed_at?: string | null
          created_at?: string
          customer_id?: string | null
          description?: string | null
          id?: string
          photo_url?: string | null
          priority?: Database["public"]["Enums"]["priority_level"] | null
          status?: Database["public"]["Enums"]["instruction_status"] | null
          title: string
          updated_at?: string
        }
        Update: {
          agent_id?: string
          business_id?: string
          completed_at?: string | null
          created_at?: string
          customer_id?: string | null
          description?: string | null
          id?: string
          photo_url?: string | null
          priority?: Database["public"]["Enums"]["priority_level"] | null
          status?: Database["public"]["Enums"]["instruction_status"] | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "call_instructions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "call_instructions_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "call_instructions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "contact_history"
            referencedColumns: ["id"]
          },
        ]
      }
      calls: {
        Row: {
          agent_id: string
          business_id: string | null
          call_direction: Database["public"]["Enums"]["call_direction"]
          call_duration: number | null
          company_name: string | null
          contact_name: string | null
          contact_type: Database["public"]["Enums"]["contact_type"] | null
          created_at: string
          id: string
          instruction_id: string | null
          notes: string | null
          phone_number: string
          updated_at: string
        }
        Insert: {
          agent_id: string
          business_id?: string | null
          call_direction: Database["public"]["Enums"]["call_direction"]
          call_duration?: number | null
          company_name?: string | null
          contact_name?: string | null
          contact_type?: Database["public"]["Enums"]["contact_type"] | null
          created_at?: string
          id?: string
          instruction_id?: string | null
          notes?: string | null
          phone_number: string
          updated_at?: string
        }
        Update: {
          agent_id?: string
          business_id?: string | null
          call_direction?: Database["public"]["Enums"]["call_direction"]
          call_duration?: number | null
          company_name?: string | null
          contact_name?: string | null
          contact_type?: Database["public"]["Enums"]["contact_type"] | null
          created_at?: string
          id?: string
          instruction_id?: string | null
          notes?: string | null
          phone_number?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calls_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calls_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calls_instruction_id_fkey"
            columns: ["instruction_id"]
            isOneToOne: false
            referencedRelation: "call_instructions"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_history: {
        Row: {
          business_id: string | null
          company_name: string | null
          contact_name: string | null
          contact_type: Database["public"]["Enums"]["contact_type"] | null
          created_at: string
          id: string
          phone_number: string
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          business_id?: string | null
          company_name?: string | null
          contact_name?: string | null
          contact_type?: Database["public"]["Enums"]["contact_type"] | null
          created_at?: string
          id?: string
          phone_number: string
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          business_id?: string | null
          company_name?: string | null
          contact_name?: string | null
          contact_type?: Database["public"]["Enums"]["contact_type"] | null
          created_at?: string
          id?: string
          phone_number?: string
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_history_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_inquiries: {
        Row: {
          budget_range: string | null
          company_name: string
          contact_person: string
          created_at: string
          email: string
          expected_volume: string | null
          id: string
          industry: string | null
          is_read: boolean | null
          phone: string | null
          project_description: string | null
          service_type: string[] | null
          target_markets: string[] | null
          timeline: string | null
          website: string | null
        }
        Insert: {
          budget_range?: string | null
          company_name: string
          contact_person: string
          created_at?: string
          email: string
          expected_volume?: string | null
          id?: string
          industry?: string | null
          is_read?: boolean | null
          phone?: string | null
          project_description?: string | null
          service_type?: string[] | null
          target_markets?: string[] | null
          timeline?: string | null
          website?: string | null
        }
        Update: {
          budget_range?: string | null
          company_name?: string
          contact_person?: string
          created_at?: string
          email?: string
          expected_volume?: string | null
          id?: string
          industry?: string | null
          is_read?: boolean | null
          phone?: string | null
          project_description?: string | null
          service_type?: string[] | null
          target_markets?: string[] | null
          timeline?: string | null
          website?: string | null
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          admin_notes: string | null
          applied_at: string
          birth_date: string
          city: string
          cover_letter_url: string | null
          cv_file_url: string
          email: string
          first_name: string
          id: string
          job_listing_id: string | null
          languages: string[]
          last_name: string
          nationality: string
          phone: string
          postal_code: string
          status: string | null
          street_address: string
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          applied_at?: string
          birth_date: string
          city: string
          cover_letter_url?: string | null
          cv_file_url: string
          email: string
          first_name: string
          id?: string
          job_listing_id?: string | null
          languages?: string[]
          last_name: string
          nationality: string
          phone: string
          postal_code: string
          status?: string | null
          street_address: string
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          applied_at?: string
          birth_date?: string
          city?: string
          cover_letter_url?: string | null
          cv_file_url?: string
          email?: string
          first_name?: string
          id?: string
          job_listing_id?: string | null
          languages?: string[]
          last_name?: string
          nationality?: string
          phone?: string
          postal_code?: string
          status?: string | null
          street_address?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_applications_job_listing_id_fkey"
            columns: ["job_listing_id"]
            isOneToOne: false
            referencedRelation: "job_listings"
            referencedColumns: ["id"]
          },
        ]
      }
      job_listings: {
        Row: {
          additional_info: Json | null
          application_deadline: string | null
          benefits: string[] | null
          created_at: string
          department: string | null
          employment_model: string | null
          employment_type: string | null
          id: string
          is_featured: boolean | null
          is_published: boolean | null
          languages_required: string[] | null
          location: string
          position_description: string | null
          qualifications: string[] | null
          responsibilities: string[] | null
          salary_max: number | null
          salary_min: number | null
          title: string
          updated_at: string
        }
        Insert: {
          additional_info?: Json | null
          application_deadline?: string | null
          benefits?: string[] | null
          created_at?: string
          department?: string | null
          employment_model?: string | null
          employment_type?: string | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          languages_required?: string[] | null
          location: string
          position_description?: string | null
          qualifications?: string[] | null
          responsibilities?: string[] | null
          salary_max?: number | null
          salary_min?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          additional_info?: Json | null
          application_deadline?: string | null
          benefits?: string[] | null
          created_at?: string
          department?: string | null
          employment_model?: string | null
          employment_type?: string | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          languages_required?: string[] | null
          location?: string
          position_description?: string | null
          qualifications?: string[] | null
          responsibilities?: string[] | null
          salary_max?: number | null
          salary_min?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      support_messages: {
        Row: {
          admin_user_id: string | null
          agent_id: string
          attachments: Json | null
          business_id: string | null
          created_at: string
          id: string
          is_agent_message: boolean | null
          message: string
          read_at: string | null
          support_type: string | null
        }
        Insert: {
          admin_user_id?: string | null
          agent_id: string
          attachments?: Json | null
          business_id?: string | null
          created_at?: string
          id?: string
          is_agent_message?: boolean | null
          message: string
          read_at?: string | null
          support_type?: string | null
        }
        Update: {
          admin_user_id?: string | null
          agent_id?: string
          attachments?: Json | null
          business_id?: string | null
          created_at?: string
          id?: string
          is_agent_message?: boolean | null
          message?: string
          read_at?: string | null
          support_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "support_messages_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_messages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_service_types: {
        Args: { types: string[] }
        Returns: boolean
      }
      get_agent_id: {
        Args: { _user_id: string }
        Returns: string
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      test_user_creation: {
        Args: Record<PropertyKey, never>
        Returns: {
          profile_exists: boolean
          role_exists: boolean
          agent_exists: boolean
        }[]
      }
    }
    Enums: {
      agent_activity_status: "active" | "inactive"
      agent_status: "online" | "pause" | "im_gespräch" | "offline"
      app_role: "admin" | "agent"
      call_direction: "inbound" | "outbound"
      contact_type: "privat" | "geschäftlich"
      instruction_status: "offen" | "in_bearbeitung" | "abgeschlossen"
      priority_level: "niedrig" | "normal" | "hoch" | "dringend"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      agent_activity_status: ["active", "inactive"],
      agent_status: ["online", "pause", "im_gespräch", "offline"],
      app_role: ["admin", "agent"],
      call_direction: ["inbound", "outbound"],
      contact_type: ["privat", "geschäftlich"],
      instruction_status: ["offen", "in_bearbeitung", "abgeschlossen"],
      priority_level: ["niedrig", "normal", "hoch", "dringend"],
    },
  },
} as const

-- Create internships table
CREATE TABLE IF NOT EXISTS public.internships (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    position TEXT NOT NULL,
    start_date DATE,
    end_date DATE,
    description TEXT,
    is_current BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.internships ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own internships"
    ON public.internships
    FOR SELECT
    USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert their own internships"
    ON public.internships
    FOR INSERT
    WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can update their own internships"
    ON public.internships
    FOR UPDATE
    USING (auth.uid() = profile_id);

CREATE POLICY "Users can delete their own internships"
    ON public.internships
    FOR DELETE
    USING (auth.uid() = profile_id);

-- Create trigger for updating the updated_at timestamp
CREATE TRIGGER update_internships_updated_at
    BEFORE UPDATE ON public.internships
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 
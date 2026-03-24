import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Create Supabase client using anon key for public queries
const getSupabaseClient = () => {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_ANON_KEY");
  
  console.log("Creating Supabase client with URL:", url);
  
  if (!url || !key) {
    console.error("Missing SUPABASE_URL or SUPABASE_ANON_KEY");
    throw new Error("Missing Supabase credentials");
  }
  
  return createClient(url, key);
};

// Create Supabase client with service role key for admin operations
const getSupabaseAdminClient = () => {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  
  console.log("Creating Supabase admin client with URL:", url);
  
  if (!url || !key) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    throw new Error("Missing Supabase credentials");
  }
  
  return createClient(url, key);
};

// Health check endpoint
app.get("/make-server-7fc747b0/health", (c) => {
  return c.json({ status: "ok" });
});

// Get unique filter values for alkaline cleaners
app.get("/make-server-7fc747b0/alkaline-cleaners/filters", async (c) => {
  try {
    console.log("Fetching filter options...");
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.from("alkaline_cleaner").select("cleaning_strength, product_form");

    if (error) {
      console.error("Error fetching filter options:", error);
      return c.json({ error: error.message }, 500);
    }

    console.log("Fetched data rows:", data?.length);

    // Extract unique values for each filter
    const cleaningStrengths = [...new Set(data?.map(p => p.cleaning_strength).filter(Boolean))];
    const productForms = [...new Set(data?.map(p => p.product_form).filter(Boolean))];

    console.log("Cleaning strengths:", cleaningStrengths);
    console.log("Product forms:", productForms);

    return c.json({
      cleaning_strength: cleaningStrengths,
      product_form: productForms,
    });
  } catch (error) {
    console.error("Error in alkaline-cleaners/filters endpoint:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Get alkaline cleaner products with filters
app.post("/make-server-7fc747b0/alkaline-cleaners", async (c) => {
  try {
    console.log("Fetching alkaline cleaners...");
    const supabase = getSupabaseClient();
    const filters = await c.req.json();
    
    console.log("Received filters:", filters);

    let query = supabase.from("alkaline_cleaner").select("*");

    // Apply substrate filters
    if (filters.aluminum) query = query.eq("aluminum", true);
    if (filters.hot_cold_rolled_steel) query = query.eq("hot_cold_rolled_steel", true);
    if (filters.cast_forged_iron) query = query.eq("cast_forged_iron", true);
    if (filters.plastic) query = query.eq("plastic", true);
    if (filters.stainless_steel) query = query.eq("stainless_steel", true);
    if (filters.galvanized_steel) query = query.eq("galvanized_steel", true);
    if (filters.copper_brass) query = query.eq("copper_brass", true);
    if (filters.zinc_die_cast) query = query.eq("zinc_die_cast", true);

    // Apply application method filters
    if (filters.application_method && filters.application_method.length > 0) {
      const methods = filters.application_method.map((m: string) => m.toLowerCase());
      const orConditions = methods.map((m: string) => `${m}.eq.true`).join(',');
      query = query.or(orConditions);
    }

    // Apply cleaning strength filter
    if (filters.cleaning_strength && filters.cleaning_strength.length > 0) {
      query = query.in("cleaning_strength", filters.cleaning_strength);
    }

    // Apply product form filter
    if (filters.product_form && filters.product_form.length > 0) {
      query = query.in("product_form", filters.product_form);
    }

    // Apply contaminant filters
    if (filters.oil_grease) query = query.eq("oil_grease", true);
    if (filters.rust_oxides) query = query.eq("rust_oxides", true);
    if (filters.chips) query = query.eq("chips", true);
    if (filters.drawing_compounds) query = query.eq("drawing_compounds", true);
    if (filters.polishing_compounds) query = query.eq("polishing_compounds", true);

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching alkaline cleaners:", error);
      return c.json({ error: error.message }, 500);
    }

    console.log("Fetched products count:", data?.length || 0);

    return c.json({ products: data || [] });
  } catch (error) {
    console.error("Error in alkaline-cleaners endpoint:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Get single alkaline cleaner product by ID
app.get("/make-server-7fc747b0/alkaline-cleaners/:id", async (c) => {
  try {
    console.log("Fetching single alkaline cleaner...");
    const supabase = getSupabaseClient();
    const id = c.req.param("id");
    
    console.log("Product ID:", id);

    const { data, error } = await supabase
      .from("alkaline_cleaner")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching alkaline cleaner:", error);
      return c.json({ error: error.message }, 404);
    }

    console.log("Fetched product:", data?.ib_product_name);

    return c.json({ product: data });
  } catch (error) {
    console.error("Error in alkaline-cleaners/:id endpoint:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Get unique filter values for coatings/adhesives
app.get("/make-server-7fc747b0/coatings-adhesives/filters", async (c) => {
  try {
    console.log("Fetching coatings/adhesives filter options...");
    const supabase = getSupabaseAdminClient();
    const { data, error } = await supabase.from("fp_coatings_adhesives").select("abc_class, end_use, substrates");

    if (error) {
      console.error("Error fetching filter options:", error);
      return c.json({ error: error.message }, 500);
    }

    console.log("Fetched data rows:", data?.length);

    // Extract unique values for each filter
    const abcClasses = [...new Set(data?.map(p => p.abc_class).filter(Boolean))];
    const endUses = [...new Set(data?.map(p => p.end_use).filter(Boolean))];
    
    // Extract unique substrates from the substrates field (which may be an array or string)
    const allSubstrates = new Set<string>();
    data?.forEach(p => {
      if (p.substrates) {
        if (Array.isArray(p.substrates)) {
          p.substrates.forEach((s: string) => allSubstrates.add(s));
        } else if (typeof p.substrates === 'string') {
          // If it's a newline-separated string
          p.substrates.split('\n').forEach((s: string) => {
            const trimmed = s.trim();
            if (trimmed) allSubstrates.add(trimmed);
          });
        }
      }
    });
    const substrates = [...allSubstrates];

    console.log("ABC classes:", abcClasses);
    console.log("End uses:", endUses);
    console.log("Substrates:", substrates);

    return c.json({
      abc_class: abcClasses,
      end_use: endUses,
      substrates: substrates,
    });
  } catch (error) {
    console.error("Error in coatings-adhesives/filters endpoint:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Get coatings/adhesives products with filters
app.post("/make-server-7fc747b0/coatings-adhesives", async (c) => {
  try {
    console.log("Fetching coatings/adhesives products...");
    const supabase = getSupabaseAdminClient();
    const filters = await c.req.json();
    
    console.log("Received filters:", filters);

    let query = supabase.from("fp_coatings_adhesives").select("*");

    // Apply ABC class filter
    if (filters.abc_class && filters.abc_class.length > 0) {
      query = query.in("abc_class", filters.abc_class);
    }

    // Apply end use filter
    if (filters.end_use && filters.end_use.length > 0) {
      query = query.in("end_use", filters.end_use);
    }

    // Apply substrate filter (if substrates is stored as array or text)
    if (filters.substrates && filters.substrates.length > 0) {
      // Assuming substrates is stored as text, we'll use contains
      const substrateConditions = filters.substrates.map((s: string) => `substrates.ilike.%${s}%`).join(',');
      query = query.or(substrateConditions);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching coatings/adhesives:", error);
      return c.json({ error: error.message }, 500);
    }

    console.log("Fetched products count:", data?.length || 0);

    return c.json({ products: data || [] });
  } catch (error) {
    console.error("Error in coatings-adhesives endpoint:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Get single coatings/adhesives product by ID
app.get("/make-server-7fc747b0/coatings-adhesives/:id", async (c) => {
  try {
    console.log("Fetching single coatings/adhesives product...");
    const supabase = getSupabaseAdminClient();
    const id = c.req.param("id");
    
    console.log("Product ID:", id);

    const { data, error } = await supabase
      .from("fp_coatings_adhesives")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching coatings/adhesives product:", error);
      return c.json({ error: error.message }, 404);
    }

    console.log("Fetched product:", data?.ib_product_name);

    return c.json({ product: data });
  } catch (error) {
    console.error("Error in coatings-adhesives/:id endpoint:", error);
    return c.json({ error: String(error) }, 500);
  }
});

Deno.serve(app.fetch);
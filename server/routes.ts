import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      console.log("Contact form submission received:", {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || "N/A",
        subject: validatedData.subject,
        budget: validatedData.budget || "Not specified",
        messageLength: validatedData.message.length
      });

      res.status(200).json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          error: "An error occurred while processing your request." 
        });
      }
    }
  });

  return httpServer;
}

console.log("Before mocking emailjs:", await import("@emailjs/browser"));

vi.mock("@emailjs/browser", () => ({
    __esModule: true,
    default: { send: vi.fn() },
    send: vi.fn(),
}));

console.log("After mocking emailjs:", emailjs);

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import emailjs from "@emailjs/browser";
import ContactForm from "../src/components/ContactForm.jsx";

test("renders the form with all fields", () => {
    render(<ContactForm />);

    expect(screen.getByText(/contact me/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
});

test("allows user to type into input fields", async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "johndoe@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello!");

    expect(screen.getByLabelText(/name/i)).toHaveValue("John Doe");
    expect(screen.getByLabelText(/email/i)).toHaveValue("johndoe@example.com");
    expect(screen.getByLabelText(/message/i)).toHaveValue("Hello!");
});

test("submits the form successfully and resets fields", async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    console.log("emailjs in test:", emailjs)

    emailjs.send.mockResolvedValueOnce({ status: 200 });

    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "johndoe@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello!");
    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(emailjs.send).toHaveBeenCalledTimes(1);
    expect(emailjs.send).toHaveBeenCalledWith(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            name: "John Doe",
            email: "johndoe@example.com",
            message: "Hello!",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    await waitFor(() => {
        expect(screen.getByLabelText(/name/i)).toHaveValue("");
        expect(screen.getByLabelText(/email/i)).toHaveValue("");
        expect(screen.getByLabelText(/message/i)).toHaveValue("");
    });
});

test("shows an alert on failed form submission", async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    emailjs.send.mockRejectedValueOnce(new Error("Failed to send"));

    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => { });

    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "johndoe@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello!");
    await user.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() => {
        expect(alertMock).toHaveBeenCalledWith("Failed to send message :[ ");
    });

    alertMock.mockRestore();
});
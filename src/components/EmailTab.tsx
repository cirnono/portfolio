import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mldwqvja");
    if (state.succeeded) {
        return (
            <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
            </p>
        );
    }

    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                >
                    Your email
                </label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="helloworld@gmail.com"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                >
                    Subject
                </label>
                <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Just saying hi"
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                >
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button
                className="
                    w-full inline-flex items-center justify-center
                    rounded-lg px-5 py-2.5 font-medium text-white
                    bg-gradient-to-r from-primary to-secondary
                    hover:from-primary/90 hover:to-secondary/90
                    disabled:opacity-60 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-2 focus:ring-primary/30
                    transition-[background,opacity]
                "
            >
                Send Message
            </button>
        </form>
    );
}

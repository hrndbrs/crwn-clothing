import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	typescript: true,
	apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
	const { amount } = await req.json();

	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: +amount,
			currency: "IDR",
			payment_method_types: ["card"],
		});

		return NextResponse.json(
			{
				message: "stripe client secret is successfully created",
				content: { clientSecret: paymentIntent.client_secret },
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "failed to complete payment", error },
			{
				status: 400,
			}
		);
	}
}

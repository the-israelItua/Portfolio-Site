import { NextResponse } from 'next/server';

export default function handler(req, res) {
  res.status(200).json({ message: 'Server is running' });
}

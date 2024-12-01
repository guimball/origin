const Interest = require('../models/Interest');
const Property = require('../models/Property');
const nodemailer = require('nodemailer');

// Email setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Send email function
const sendEmail = async (to, subject, htmlContent) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: htmlContent,
    };
    await transporter.sendMail(mailOptions);
};

exports.createInterest = async (req, res) => {
    try {
        const interest = new Interest(req.body);
        await interest.save();

        // Fetch the property details including images
        const property = await Property.findById(interest.propertyId);

        // Email content for the user
        const userEmailContent = `
            <h3>Thank you for your interest!</h3>
            <p>Property: ${property.title}</p>
            <p>Price: ${property.price}</p>
            <p>Location: ${property.location}</p>
            <h4>Property Images:</h4>
            <img src="${property.images.livingRoom}" alt="Living Room" width="300"/>
            <img src="${property.images.bedroom}" alt="Bedroom" width="300"/>
            <img src="${property.images.bathroom}" alt="Bathroom" width="300"/>
            <img src="${property.images.kitchen}" alt="Kitchen" width="300"/>
            <p>You can submit a proposal if you're interested.</p>
        `;

        // Email content for the admin
        const adminEmailContent = `
            <h3>New Interest Registered</h3>
            <p>User Email: ${interest.email}</p>
            <p>Property: ${property.title}</p>
            <p>Price: ${property.price}</p>
            <p>Location: ${property.location}</p>
        `;

        // Send email to the user
        await sendEmail(interest.email, 'Property Interest Confirmation', userEmailContent);

        // Send email to the admin
        await sendEmail(process.env.ADMIN_EMAIL, 'New Interest Notification', adminEmailContent);

        res.status(201).json(interest);
    } catch (error) {
        console.error('Erro ao registrar interesse:', error);
        res.status(500).json({ message: 'Erro ao registrar interesse' });
    }
};

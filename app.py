from flask import Flask, render_template, request, flash, redirect, url_for
from flask_mailman import Mail
from flask_mail import Message

app = Flask(__name__)

app.config["MAIL_SERVER"] = ""
app.config["MAIL_PORT"] = 465
app.config["MAIL_USERNAME"] = ""
app.config["MAIL_PASSWORD"] = ""
app.config["MAIL_USE_TLS"] = False
app.config["MAIL_USE_SSL"] = True
app.config['MAIL_DEFAULT_SENDER'] = 'contact@sundaycw.net'

mail=Mail(app)
    
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    msg = Message('New Message From Your Website', recipients=['your_email@example.com'])
    msg.body = f'Name: {name}\nEmail: {email}\n\nMessage:\n{message}'

    try:
        mail.send(msg)
        flash('Message sent successfully.')
        return redirect(url_for('home'))
    except Exception as e:
        flash(f'An error occurred: {e}')
        return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
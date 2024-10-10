FROM python:latest
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5000
ENV FLASK_RUN_PORT=5000
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=5000"]
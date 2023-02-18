FROM golang:latest

WORKDIR /app

COPY go.mod .
COPY go.sum .
RUN go mod download

COPY . .

RUN mkdir --parents /usr/local/share/ca-certificates/Yandex/
RUN wget "https://storage.yandexcloud.net/cloud-certs/CA.pem" --output-document /usr/local/share/ca-certificates/Yandex/YandexCA.crt && chmod 655 /usr/local/share/ca-certificates/Yandex/YandexCA.crt

RUN go build -o /goapp ./cmd

EXPOSE 8000

CMD ["/goapp"]
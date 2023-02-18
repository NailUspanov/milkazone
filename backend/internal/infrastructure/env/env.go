package env

import (
	"fmt"
	"os"
	"strconv"
)

var (
	//DB
	DbHost        = Getter("DB_HOST", "")
	DbPort        = Getter("DB_PORT", "")
	DbUser        = Getter("DB_USER", "")
	DbName        = Getter("DB_NAME", "")
	DbPassword    = Getter("DB_PASSWORD", "")
	DbSslMode     = Getter("DB_SSL_MODE", "disable")
	DbSslCertPath = Getter("DB_SSL_CERT_PATH", "")

	//Server
	HttpPort = fmt.Sprintf(":%s", Getter("HTTP_PORT", "8080"))

	//Kafka
	KafkaBrokers  = Getter("K_BROKERS", "")
	KafkaClientID = Getter("K_CLIENT_ID", "")
	KafkaUser     = Getter("K_USER", "")
	KafkaPassword = Getter("K_PASSWORD", "")
	KafkaTopic    = Getter("K_TOPIC", "")
)

// Getter -
func Getter(key, defaultValue string) string {
	env, ok := os.LookupEnv(key)
	if ok {
		return env
	}
	return defaultValue
}

// GetterInt -
func GetterInt(key string, defaultValue int) int {
	env, ok := os.LookupEnv(key)
	if ok {
		res, err := strconv.ParseInt(env, 10, 32)
		if err == nil {
			return int(res)
		}
	}
	return defaultValue
}

func GetterBool(key string, defaultValue bool) bool {
	env, ok := os.LookupEnv(key)
	if ok {
		res, err := strconv.ParseBool(env)
		if err == nil {
			return res
		}
	}
	return defaultValue
}

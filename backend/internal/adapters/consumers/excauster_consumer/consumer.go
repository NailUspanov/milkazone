package excauster_consumer

type ConsumerService struct {
}

func NewConsumerService() *ConsumerService {

	return &ConsumerService{}
}

func (cs *ConsumerService) Get() ([]byte, error) {
	return nil, nil
}

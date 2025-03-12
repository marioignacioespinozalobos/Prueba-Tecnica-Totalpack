using Mapster;
using Ttp.Arquitectura.Users.Domain.Interfaces.Repository;
using Ttp.Arquitectura.Users.Domain;

namespace Ttp.Arquitectura.Users.Application.Queries
{
    public class GetUserIdQuery
    {
        public Guid Id { get; set; }
        public string FullName { get; set; }
        public DateTime Birth { get; set; }
        public string Email { get; set; }
    }

    public class GetUserIdHandler
    {
        private readonly IGenericRepository<User> _userRepository;

        public GetUserIdHandler(IGenericRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public GetUserIdQuery Handle(Guid id)
        {
            var user = _userRepository.GetByID(id);
            return user.Adapt<GetUserIdQuery>();
        }
    }
}
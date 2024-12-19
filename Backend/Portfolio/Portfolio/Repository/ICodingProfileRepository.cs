using System.Collections.Generic;
using System.Threading.Tasks;
using Portfolio.Model;

namespace Portfolio.Service
{
    public interface ICodingProfileRepository
    {
        Task<List<CodingProfile>> GetAllAsync();
        Task<CodingProfile> CreateAsync(CodingProfile profile);
    }
}
